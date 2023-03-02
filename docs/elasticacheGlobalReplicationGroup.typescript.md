# `elasticacheGlobalReplicationGroup` Submodule <a name="`elasticacheGlobalReplicationGroup` Submodule" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheGlobalReplicationGroup <a name="ElasticacheGlobalReplicationGroup" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group aws_elasticache_global_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

new elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup(scope: Construct, id: string, config: ElasticacheGlobalReplicationGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled">resetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType">resetCacheNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription">resetGlobalReplicationGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetNumNodeGroups">resetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ElasticacheGlobalReplicationGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>

---

##### `resetAutomaticFailoverEnabled` <a name="resetAutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled"></a>

```typescript
public resetAutomaticFailoverEnabled(): void
```

##### `resetCacheNodeType` <a name="resetCacheNodeType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType"></a>

```typescript
public resetCacheNodeType(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetGlobalReplicationGroupDescription` <a name="resetGlobalReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription"></a>

```typescript
public resetGlobalReplicationGroupDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNumNodeGroups` <a name="resetNumNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetNumNodeGroups"></a>

```typescript
public resetNumNodeGroups(): void
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetParameterGroupName"></a>

```typescript
public resetParameterGroupName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.authTokenEnabled">authTokenEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.clusterEnabled">clusterEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionActual">engineVersionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroups">globalNodeGroups</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList">ElasticacheGlobalReplicationGroupGlobalNodeGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference">ElasticacheGlobalReplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput">automaticFailoverEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput">cacheNodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput">globalReplicationGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput">globalReplicationGroupIdSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroupsInput">numNodeGroupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupIdInput">primaryReplicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType">cacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription">globalReplicationGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix">globalReplicationGroupIdSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroups">numNodeGroups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupId">primaryReplicationGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="atRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

```typescript
public readonly atRestEncryptionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `authTokenEnabled`<sup>Required</sup> <a name="authTokenEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.authTokenEnabled"></a>

```typescript
public readonly authTokenEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clusterEnabled`<sup>Required</sup> <a name="clusterEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.clusterEnabled"></a>

```typescript
public readonly clusterEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersionActual`<sup>Required</sup> <a name="engineVersionActual" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionActual"></a>

```typescript
public readonly engineVersionActual: string;
```

- *Type:* string

---

##### `globalNodeGroups`<sup>Required</sup> <a name="globalNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroups"></a>

```typescript
public readonly globalNodeGroups: ElasticacheGlobalReplicationGroupGlobalNodeGroupsList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList">ElasticacheGlobalReplicationGroupGlobalNodeGroupsList</a>

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="globalReplicationGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

```typescript
public readonly globalReplicationGroupId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticacheGlobalReplicationGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference">ElasticacheGlobalReplicationGroupTimeoutsOutputReference</a>

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="transitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

```typescript
public readonly transitEncryptionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `automaticFailoverEnabledInput`<sup>Optional</sup> <a name="automaticFailoverEnabledInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput"></a>

```typescript
public readonly automaticFailoverEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheNodeTypeInput`<sup>Optional</sup> <a name="cacheNodeTypeInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput"></a>

```typescript
public readonly cacheNodeTypeInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `globalReplicationGroupDescriptionInput`<sup>Optional</sup> <a name="globalReplicationGroupDescriptionInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput"></a>

```typescript
public readonly globalReplicationGroupDescriptionInput: string;
```

- *Type:* string

---

##### `globalReplicationGroupIdSuffixInput`<sup>Optional</sup> <a name="globalReplicationGroupIdSuffixInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput"></a>

```typescript
public readonly globalReplicationGroupIdSuffixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `numNodeGroupsInput`<sup>Optional</sup> <a name="numNodeGroupsInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroupsInput"></a>

```typescript
public readonly numNodeGroupsInput: number;
```

- *Type:* number

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupNameInput"></a>

```typescript
public readonly parameterGroupNameInput: string;
```

- *Type:* string

---

##### `primaryReplicationGroupIdInput`<sup>Optional</sup> <a name="primaryReplicationGroupIdInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupIdInput"></a>

```typescript
public readonly primaryReplicationGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ElasticacheGlobalReplicationGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a> | cdktf.IResolvable

---

##### `automaticFailoverEnabled`<sup>Required</sup> <a name="automaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheNodeType`<sup>Required</sup> <a name="cacheNodeType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType"></a>

```typescript
public readonly cacheNodeType: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `globalReplicationGroupDescription`<sup>Required</sup> <a name="globalReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

```typescript
public readonly globalReplicationGroupDescription: string;
```

- *Type:* string

---

##### `globalReplicationGroupIdSuffix`<sup>Required</sup> <a name="globalReplicationGroupIdSuffix" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix"></a>

```typescript
public readonly globalReplicationGroupIdSuffix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `numNodeGroups`<sup>Required</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroups"></a>

```typescript
public readonly numNodeGroups: number;
```

- *Type:* number

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

---

##### `primaryReplicationGroupId`<sup>Required</sup> <a name="primaryReplicationGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupId"></a>

```typescript
public readonly primaryReplicationGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheGlobalReplicationGroupConfig <a name="ElasticacheGlobalReplicationGroupConfig" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.Initializer"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

const elasticacheGlobalReplicationGroupConfig: elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix">globalReplicationGroupIdSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.primaryReplicationGroupId">primaryReplicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType">cacheNodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription">globalReplicationGroupDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.numNodeGroups">numNodeGroups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `globalReplicationGroupIdSuffix`<sup>Required</sup> <a name="globalReplicationGroupIdSuffix" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix"></a>

```typescript
public readonly globalReplicationGroupIdSuffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}.

---

##### `primaryReplicationGroupId`<sup>Required</sup> <a name="primaryReplicationGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.primaryReplicationGroupId"></a>

```typescript
public readonly primaryReplicationGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}.

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}.

---

##### `cacheNodeType`<sup>Optional</sup> <a name="cacheNodeType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType"></a>

```typescript
public readonly cacheNodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}.

---

##### `globalReplicationGroupDescription`<sup>Optional</sup> <a name="globalReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription"></a>

```typescript
public readonly globalReplicationGroupDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `numNodeGroups`<sup>Optional</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.numNodeGroups"></a>

```typescript
public readonly numNodeGroups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticacheGlobalReplicationGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#timeouts ElasticacheGlobalReplicationGroup#timeouts}

---

### ElasticacheGlobalReplicationGroupGlobalNodeGroups <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups.Initializer"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

const elasticacheGlobalReplicationGroupGlobalNodeGroups: elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups = { ... }
```


### ElasticacheGlobalReplicationGroupTimeouts <a name="ElasticacheGlobalReplicationGroupTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.Initializer"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

const elasticacheGlobalReplicationGroupTimeouts: elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheGlobalReplicationGroupGlobalNodeGroupsList <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroupsList" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

new elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get"></a>

```typescript
public get(index: number): ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

new elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.globalNodeGroupId">globalNodeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.slots">slots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups">ElasticacheGlobalReplicationGroupGlobalNodeGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `globalNodeGroupId`<sup>Required</sup> <a name="globalNodeGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.globalNodeGroupId"></a>

```typescript
public readonly globalNodeGroupId: string;
```

- *Type:* string

---

##### `slots`<sup>Required</sup> <a name="slots" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.slots"></a>

```typescript
public readonly slots: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheGlobalReplicationGroupGlobalNodeGroups;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups">ElasticacheGlobalReplicationGroupGlobalNodeGroups</a>

---


### ElasticacheGlobalReplicationGroupTimeoutsOutputReference <a name="ElasticacheGlobalReplicationGroupTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { elasticacheGlobalReplicationGroup } from '@cdktf/provider-aws'

new elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheGlobalReplicationGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a> | cdktf.IResolvable

---



