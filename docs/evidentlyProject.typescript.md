# `evidentlyProject` Submodule <a name="`evidentlyProject` Submodule" id="@cdktf/provider-aws.evidentlyProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyProject <a name="EvidentlyProject" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_project aws_evidently_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

new evidentlyProject.EvidentlyProject(scope: Construct, id: string, config: EvidentlyProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig">EvidentlyProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig">EvidentlyProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery">putDataDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDataDelivery">resetDataDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDataDelivery` <a name="putDataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery"></a>

```typescript
public putDataDelivery(value: EvidentlyProjectDataDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts"></a>

```typescript
public putTimeouts(value: EvidentlyProjectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>

---

##### `resetDataDelivery` <a name="resetDataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDataDelivery"></a>

```typescript
public resetDataDelivery(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isConstruct"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

evidentlyProject.EvidentlyProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformElement"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

evidentlyProject.EvidentlyProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformResource"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

evidentlyProject.EvidentlyProject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeExperimentCount">activeExperimentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeLaunchCount">activeLaunchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDelivery">dataDelivery</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference">EvidentlyProjectDataDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.experimentCount">experimentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.featureCount">featureCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.launchCount">launchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference">EvidentlyProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDeliveryInput">dataDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activeExperimentCount`<sup>Required</sup> <a name="activeExperimentCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeExperimentCount"></a>

```typescript
public readonly activeExperimentCount: number;
```

- *Type:* number

---

##### `activeLaunchCount`<sup>Required</sup> <a name="activeLaunchCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeLaunchCount"></a>

```typescript
public readonly activeLaunchCount: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `dataDelivery`<sup>Required</sup> <a name="dataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDelivery"></a>

```typescript
public readonly dataDelivery: EvidentlyProjectDataDeliveryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference">EvidentlyProjectDataDeliveryOutputReference</a>

---

##### `experimentCount`<sup>Required</sup> <a name="experimentCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.experimentCount"></a>

```typescript
public readonly experimentCount: number;
```

- *Type:* number

---

##### `featureCount`<sup>Required</sup> <a name="featureCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.featureCount"></a>

```typescript
public readonly featureCount: number;
```

- *Type:* number

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `launchCount`<sup>Required</sup> <a name="launchCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.launchCount"></a>

```typescript
public readonly launchCount: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeouts"></a>

```typescript
public readonly timeouts: EvidentlyProjectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference">EvidentlyProjectTimeoutsOutputReference</a>

---

##### `dataDeliveryInput`<sup>Optional</sup> <a name="dataDeliveryInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDeliveryInput"></a>

```typescript
public readonly dataDeliveryInput: EvidentlyProjectDataDelivery;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: EvidentlyProjectTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyProjectConfig <a name="EvidentlyProjectConfig" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

const evidentlyProjectConfig: evidentlyProject.EvidentlyProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#name EvidentlyProject#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dataDelivery">dataDelivery</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | data_delivery block. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#description EvidentlyProject#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#id EvidentlyProject#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags EvidentlyProject#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags_all EvidentlyProject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#name EvidentlyProject#name}.

---

##### `dataDelivery`<sup>Optional</sup> <a name="dataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dataDelivery"></a>

```typescript
public readonly dataDelivery: EvidentlyProjectDataDelivery;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

data_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#data_delivery EvidentlyProject#data_delivery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#description EvidentlyProject#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#id EvidentlyProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags EvidentlyProject#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags_all EvidentlyProject#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EvidentlyProjectTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#timeouts EvidentlyProject#timeouts}

---

### EvidentlyProjectDataDelivery <a name="EvidentlyProjectDataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

const evidentlyProjectDataDelivery: evidentlyProject.EvidentlyProjectDataDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a></code> | s3_destination block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: EvidentlyProjectDataDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#cloudwatch_logs EvidentlyProject#cloudwatch_logs}

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.s3Destination"></a>

```typescript
public readonly s3Destination: EvidentlyProjectDataDeliveryS3Destination;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#s3_destination EvidentlyProject#s3_destination}

---

### EvidentlyProjectDataDeliveryCloudwatchLogs <a name="EvidentlyProjectDataDeliveryCloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

const evidentlyProjectDataDeliveryCloudwatchLogs: evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#log_group EvidentlyProject#log_group}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#log_group EvidentlyProject#log_group}.

---

### EvidentlyProjectDataDeliveryS3Destination <a name="EvidentlyProjectDataDeliveryS3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

const evidentlyProjectDataDeliveryS3Destination: evidentlyProject.EvidentlyProjectDataDeliveryS3Destination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#bucket EvidentlyProject#bucket}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#prefix EvidentlyProject#prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#bucket EvidentlyProject#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#prefix EvidentlyProject#prefix}.

---

### EvidentlyProjectTimeouts <a name="EvidentlyProjectTimeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

const evidentlyProjectTimeouts: evidentlyProject.EvidentlyProjectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#create EvidentlyProject#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#delete EvidentlyProject#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#update EvidentlyProject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#create EvidentlyProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#delete EvidentlyProject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#update EvidentlyProject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference <a name="EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

new evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyProjectDataDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

---


### EvidentlyProjectDataDeliveryOutputReference <a name="EvidentlyProjectDataDeliveryOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

new evidentlyProject.EvidentlyProjectDataDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetS3Destination">resetS3Destination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: EvidentlyProjectDataDeliveryCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

---

##### `putS3Destination` <a name="putS3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination"></a>

```typescript
public putS3Destination(value: EvidentlyProjectDataDeliveryS3Destination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetS3Destination"></a>

```typescript
public resetS3Destination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference">EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference">EvidentlyProjectDataDeliveryS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3DestinationInput">s3DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference">EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference</a>

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3Destination"></a>

```typescript
public readonly s3Destination: EvidentlyProjectDataDeliveryS3DestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference">EvidentlyProjectDataDeliveryS3DestinationOutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: EvidentlyProjectDataDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3DestinationInput"></a>

```typescript
public readonly s3DestinationInput: EvidentlyProjectDataDeliveryS3Destination;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyProjectDataDelivery;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---


### EvidentlyProjectDataDeliveryS3DestinationOutputReference <a name="EvidentlyProjectDataDeliveryS3DestinationOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

new evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyProjectDataDeliveryS3Destination;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

---


### EvidentlyProjectTimeoutsOutputReference <a name="EvidentlyProjectTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer"></a>

```typescript
import { evidentlyProject } from '@cdktf/provider-aws'

new evidentlyProject.EvidentlyProjectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvidentlyProjectTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a> | cdktf.IResolvable

---



