# `neptuneClusterEndpoint` Submodule <a name="`neptuneClusterEndpoint` Submodule" id="@cdktf/provider-aws.neptuneClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneClusterEndpoint <a name="NeptuneClusterEndpoint" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint aws_neptune_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer"></a>

```typescript
import { neptuneClusterEndpoint } from '@cdktf/provider-aws'

new neptuneClusterEndpoint.NeptuneClusterEndpoint(scope: Construct, id: string, config: NeptuneClusterEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig">NeptuneClusterEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig">NeptuneClusterEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetExcludedMembers">resetExcludedMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetStaticMembers">resetStaticMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetExcludedMembers` <a name="resetExcludedMembers" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetExcludedMembers"></a>

```typescript
public resetExcludedMembers(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStaticMembers` <a name="resetStaticMembers" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetStaticMembers"></a>

```typescript
public resetStaticMembers(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isConstruct"></a>

```typescript
import { neptuneClusterEndpoint } from '@cdktf/provider-aws'

neptuneClusterEndpoint.NeptuneClusterEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformElement"></a>

```typescript
import { neptuneClusterEndpoint } from '@cdktf/provider-aws'

neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformResource"></a>

```typescript
import { neptuneClusterEndpoint } from '@cdktf/provider-aws'

neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterEndpointIdentifierInput">clusterEndpointIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.excludedMembersInput">excludedMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.staticMembersInput">staticMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterEndpointIdentifier">clusterEndpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.excludedMembers">excludedMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.staticMembers">staticMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `clusterEndpointIdentifierInput`<sup>Optional</sup> <a name="clusterEndpointIdentifierInput" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterEndpointIdentifierInput"></a>

```typescript
public readonly clusterEndpointIdentifierInput: string;
```

- *Type:* string

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `excludedMembersInput`<sup>Optional</sup> <a name="excludedMembersInput" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.excludedMembersInput"></a>

```typescript
public readonly excludedMembersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `staticMembersInput`<sup>Optional</sup> <a name="staticMembersInput" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.staticMembersInput"></a>

```typescript
public readonly staticMembersInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterEndpointIdentifier`<sup>Required</sup> <a name="clusterEndpointIdentifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterEndpointIdentifier"></a>

```typescript
public readonly clusterEndpointIdentifier: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `excludedMembers`<sup>Required</sup> <a name="excludedMembers" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.excludedMembers"></a>

```typescript
public readonly excludedMembers: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `staticMembers`<sup>Required</sup> <a name="staticMembers" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.staticMembers"></a>

```typescript
public readonly staticMembers: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterEndpointConfig <a name="NeptuneClusterEndpointConfig" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.Initializer"></a>

```typescript
import { neptuneClusterEndpoint } from '@cdktf/provider-aws'

const neptuneClusterEndpointConfig: neptuneClusterEndpoint.NeptuneClusterEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.clusterEndpointIdentifier">clusterEndpointIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_endpoint_identifier NeptuneClusterEndpoint#cluster_endpoint_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_identifier NeptuneClusterEndpoint#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#endpoint_type NeptuneClusterEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.excludedMembers">excludedMembers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#excluded_members NeptuneClusterEndpoint#excluded_members}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#id NeptuneClusterEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.staticMembers">staticMembers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#static_members NeptuneClusterEndpoint#static_members}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags NeptuneClusterEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags_all NeptuneClusterEndpoint#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterEndpointIdentifier`<sup>Required</sup> <a name="clusterEndpointIdentifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.clusterEndpointIdentifier"></a>

```typescript
public readonly clusterEndpointIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_endpoint_identifier NeptuneClusterEndpoint#cluster_endpoint_identifier}.

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_identifier NeptuneClusterEndpoint#cluster_identifier}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#endpoint_type NeptuneClusterEndpoint#endpoint_type}.

---

##### `excludedMembers`<sup>Optional</sup> <a name="excludedMembers" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.excludedMembers"></a>

```typescript
public readonly excludedMembers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#excluded_members NeptuneClusterEndpoint#excluded_members}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#id NeptuneClusterEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `staticMembers`<sup>Optional</sup> <a name="staticMembers" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.staticMembers"></a>

```typescript
public readonly staticMembers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#static_members NeptuneClusterEndpoint#static_members}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags NeptuneClusterEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags_all NeptuneClusterEndpoint#tags_all}.

---



