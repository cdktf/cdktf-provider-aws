# `emrcontainersVirtualCluster` Submodule <a name="`emrcontainersVirtualCluster` Submodule" id="@cdktf/provider-aws.emrcontainersVirtualCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrcontainersVirtualCluster <a name="EmrcontainersVirtualCluster" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

new emrcontainersVirtualCluster.EmrcontainersVirtualCluster(scope: Construct, id: string, config: EmrcontainersVirtualClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig">EmrcontainersVirtualClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig">EmrcontainersVirtualClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider">putContainerProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putContainerProvider` <a name="putContainerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider"></a>

```typescript
public putContainerProvider(value: EmrcontainersVirtualClusterContainerProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: EmrcontainersVirtualClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProvider">containerProvider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference">EmrcontainersVirtualClusterContainerProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference">EmrcontainersVirtualClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProviderInput">containerProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `containerProvider`<sup>Required</sup> <a name="containerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProvider"></a>

```typescript
public readonly containerProvider: EmrcontainersVirtualClusterContainerProviderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference">EmrcontainersVirtualClusterContainerProviderOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeouts"></a>

```typescript
public readonly timeouts: EmrcontainersVirtualClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference">EmrcontainersVirtualClusterTimeoutsOutputReference</a>

---

##### `containerProviderInput`<sup>Optional</sup> <a name="containerProviderInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProviderInput"></a>

```typescript
public readonly containerProviderInput: EmrcontainersVirtualClusterContainerProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: EmrcontainersVirtualClusterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrcontainersVirtualClusterConfig <a name="EmrcontainersVirtualClusterConfig" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

const emrcontainersVirtualClusterConfig: emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.containerProvider">containerProvider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | container_provider block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerProvider`<sup>Required</sup> <a name="containerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.containerProvider"></a>

```typescript
public readonly containerProvider: EmrcontainersVirtualClusterContainerProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

container_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#container_provider EmrcontainersVirtualCluster#container_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EmrcontainersVirtualClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#timeouts EmrcontainersVirtualCluster#timeouts}

---

### EmrcontainersVirtualClusterContainerProvider <a name="EmrcontainersVirtualClusterContainerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

const emrcontainersVirtualClusterContainerProvider: emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.info">info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | info block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.info"></a>

```typescript
public readonly info: EmrcontainersVirtualClusterContainerProviderInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#info EmrcontainersVirtualCluster#info}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}.

---

### EmrcontainersVirtualClusterContainerProviderInfo <a name="EmrcontainersVirtualClusterContainerProviderInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

const emrcontainersVirtualClusterContainerProviderInfo: emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.property.eksInfo">eksInfo</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | eks_info block. |

---

##### `eksInfo`<sup>Required</sup> <a name="eksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.property.eksInfo"></a>

```typescript
public readonly eksInfo: EmrcontainersVirtualClusterContainerProviderInfoEksInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

eks_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#eks_info EmrcontainersVirtualCluster#eks_info}

---

### EmrcontainersVirtualClusterContainerProviderInfoEksInfo <a name="EmrcontainersVirtualClusterContainerProviderInfoEksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

const emrcontainersVirtualClusterContainerProviderInfoEksInfo: emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}.

---

### EmrcontainersVirtualClusterTimeouts <a name="EmrcontainersVirtualClusterTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

const emrcontainersVirtualClusterTimeouts: emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference <a name="EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

new emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrcontainersVirtualClusterContainerProviderInfoEksInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


### EmrcontainersVirtualClusterContainerProviderInfoOutputReference <a name="EmrcontainersVirtualClusterContainerProviderInfoOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

new emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo">putEksInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEksInfo` <a name="putEksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo"></a>

```typescript
public putEksInfo(value: EmrcontainersVirtualClusterContainerProviderInfoEksInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo">eksInfo</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfoInput">eksInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eksInfo`<sup>Required</sup> <a name="eksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo"></a>

```typescript
public readonly eksInfo: EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference</a>

---

##### `eksInfoInput`<sup>Optional</sup> <a name="eksInfoInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfoInput"></a>

```typescript
public readonly eksInfoInput: EmrcontainersVirtualClusterContainerProviderInfoEksInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrcontainersVirtualClusterContainerProviderInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---


### EmrcontainersVirtualClusterContainerProviderOutputReference <a name="EmrcontainersVirtualClusterContainerProviderOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

new emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo">putInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfo` <a name="putInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo"></a>

```typescript
public putInfo(value: EmrcontainersVirtualClusterContainerProviderInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.info">info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.infoInput">infoInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.info"></a>

```typescript
public readonly info: EmrcontainersVirtualClusterContainerProviderInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infoInput`<sup>Optional</sup> <a name="infoInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.infoInput"></a>

```typescript
public readonly infoInput: EmrcontainersVirtualClusterContainerProviderInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrcontainersVirtualClusterContainerProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---


### EmrcontainersVirtualClusterTimeoutsOutputReference <a name="EmrcontainersVirtualClusterTimeoutsOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { emrcontainersVirtualCluster } from '@cdktf/provider-aws'

new emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrcontainersVirtualClusterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a> | cdktf.IResolvable

---



