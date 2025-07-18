# `iotIndexingConfiguration` Submodule <a name="`iotIndexingConfiguration` Submodule" id="@cdktf/provider-aws.iotIndexingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotIndexingConfiguration <a name="IotIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration aws_iot_indexing_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfiguration(scope: Construct, id: string, config?: IotIndexingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig">IotIndexingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig">IotIndexingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingGroupIndexingConfiguration">putThingGroupIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingIndexingConfiguration">putThingIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingGroupIndexingConfiguration">resetThingGroupIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingIndexingConfiguration">resetThingIndexingConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putThingGroupIndexingConfiguration` <a name="putThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingGroupIndexingConfiguration"></a>

```typescript
public putThingGroupIndexingConfiguration(value: IotIndexingConfigurationThingGroupIndexingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingGroupIndexingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

---

##### `putThingIndexingConfiguration` <a name="putThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingIndexingConfiguration"></a>

```typescript
public putThingIndexingConfiguration(value: IotIndexingConfigurationThingIndexingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingIndexingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetThingGroupIndexingConfiguration` <a name="resetThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingGroupIndexingConfiguration"></a>

```typescript
public resetThingGroupIndexingConfiguration(): void
```

##### `resetThingIndexingConfiguration` <a name="resetThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingIndexingConfiguration"></a>

```typescript
public resetThingIndexingConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotIndexingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isConstruct"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

iotIndexingConfiguration.IotIndexingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.generateConfigForImport"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

iotIndexingConfiguration.IotIndexingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IotIndexingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotIndexingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotIndexingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotIndexingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfiguration">thingGroupIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference">IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfiguration">thingIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference">IotIndexingConfigurationThingIndexingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfigurationInput">thingGroupIndexingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfigurationInput">thingIndexingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `thingGroupIndexingConfiguration`<sup>Required</sup> <a name="thingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfiguration"></a>

```typescript
public readonly thingGroupIndexingConfiguration: IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference">IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference</a>

---

##### `thingIndexingConfiguration`<sup>Required</sup> <a name="thingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfiguration"></a>

```typescript
public readonly thingIndexingConfiguration: IotIndexingConfigurationThingIndexingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference">IotIndexingConfigurationThingIndexingConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `thingGroupIndexingConfigurationInput`<sup>Optional</sup> <a name="thingGroupIndexingConfigurationInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfigurationInput"></a>

```typescript
public readonly thingGroupIndexingConfigurationInput: IotIndexingConfigurationThingGroupIndexingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

---

##### `thingIndexingConfigurationInput`<sup>Optional</sup> <a name="thingIndexingConfigurationInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfigurationInput"></a>

```typescript
public readonly thingIndexingConfigurationInput: IotIndexingConfigurationThingIndexingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotIndexingConfigurationConfig <a name="IotIndexingConfigurationConfig" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

const iotIndexingConfigurationConfig: iotIndexingConfiguration.IotIndexingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#id IotIndexingConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingGroupIndexingConfiguration">thingGroupIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | thing_group_indexing_configuration block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingIndexingConfiguration">thingIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | thing_indexing_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#id IotIndexingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#region IotIndexingConfiguration#region}

---

##### `thingGroupIndexingConfiguration`<sup>Optional</sup> <a name="thingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingGroupIndexingConfiguration"></a>

```typescript
public readonly thingGroupIndexingConfiguration: IotIndexingConfigurationThingGroupIndexingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

thing_group_indexing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_group_indexing_configuration IotIndexingConfiguration#thing_group_indexing_configuration}

---

##### `thingIndexingConfiguration`<sup>Optional</sup> <a name="thingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingIndexingConfiguration"></a>

```typescript
public readonly thingIndexingConfiguration: IotIndexingConfigurationThingIndexingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

thing_indexing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_indexing_configuration IotIndexingConfiguration#thing_indexing_configuration}

---

### IotIndexingConfigurationThingGroupIndexingConfiguration <a name="IotIndexingConfigurationThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

const iotIndexingConfigurationThingGroupIndexingConfiguration: iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.thingGroupIndexingMode">thingGroupIndexingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_group_indexing_mode IotIndexingConfiguration#thing_group_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.customField">customField</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>[]</code> | custom_field block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.managedField">managedField</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>[]</code> | managed_field block. |

---

##### `thingGroupIndexingMode`<sup>Required</sup> <a name="thingGroupIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.thingGroupIndexingMode"></a>

```typescript
public readonly thingGroupIndexingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_group_indexing_mode IotIndexingConfiguration#thing_group_indexing_mode}.

---

##### `customField`<sup>Optional</sup> <a name="customField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.customField"></a>

```typescript
public readonly customField: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>[]

custom_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}

---

##### `managedField`<sup>Optional</sup> <a name="managedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.managedField"></a>

```typescript
public readonly managedField: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>[]

managed_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}

---

### IotIndexingConfigurationThingGroupIndexingConfigurationCustomField <a name="IotIndexingConfigurationThingGroupIndexingConfigurationCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

const iotIndexingConfigurationThingGroupIndexingConfigurationCustomField: iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

### IotIndexingConfigurationThingGroupIndexingConfigurationManagedField <a name="IotIndexingConfigurationThingGroupIndexingConfigurationManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

const iotIndexingConfigurationThingGroupIndexingConfigurationManagedField: iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

### IotIndexingConfigurationThingIndexingConfiguration <a name="IotIndexingConfigurationThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

const iotIndexingConfigurationThingIndexingConfiguration: iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingIndexingMode">thingIndexingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_indexing_mode IotIndexingConfiguration#thing_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.customField">customField</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>[]</code> | custom_field block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.deviceDefenderIndexingMode">deviceDefenderIndexingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#device_defender_indexing_mode IotIndexingConfiguration#device_defender_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter">IotIndexingConfigurationThingIndexingConfigurationFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.managedField">managedField</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>[]</code> | managed_field block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.namedShadowIndexingMode">namedShadowIndexingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#named_shadow_indexing_mode IotIndexingConfiguration#named_shadow_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingConnectivityIndexingMode">thingConnectivityIndexingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_connectivity_indexing_mode IotIndexingConfiguration#thing_connectivity_indexing_mode}. |

---

##### `thingIndexingMode`<sup>Required</sup> <a name="thingIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingIndexingMode"></a>

```typescript
public readonly thingIndexingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_indexing_mode IotIndexingConfiguration#thing_indexing_mode}.

---

##### `customField`<sup>Optional</sup> <a name="customField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.customField"></a>

```typescript
public readonly customField: IResolvable | IotIndexingConfigurationThingIndexingConfigurationCustomField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>[]

custom_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}

---

##### `deviceDefenderIndexingMode`<sup>Optional</sup> <a name="deviceDefenderIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.deviceDefenderIndexingMode"></a>

```typescript
public readonly deviceDefenderIndexingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#device_defender_indexing_mode IotIndexingConfiguration#device_defender_indexing_mode}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.filter"></a>

```typescript
public readonly filter: IotIndexingConfigurationThingIndexingConfigurationFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter">IotIndexingConfigurationThingIndexingConfigurationFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#filter IotIndexingConfiguration#filter}

---

##### `managedField`<sup>Optional</sup> <a name="managedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.managedField"></a>

```typescript
public readonly managedField: IResolvable | IotIndexingConfigurationThingIndexingConfigurationManagedField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>[]

managed_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}

---

##### `namedShadowIndexingMode`<sup>Optional</sup> <a name="namedShadowIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.namedShadowIndexingMode"></a>

```typescript
public readonly namedShadowIndexingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#named_shadow_indexing_mode IotIndexingConfiguration#named_shadow_indexing_mode}.

---

##### `thingConnectivityIndexingMode`<sup>Optional</sup> <a name="thingConnectivityIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingConnectivityIndexingMode"></a>

```typescript
public readonly thingConnectivityIndexingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#thing_connectivity_indexing_mode IotIndexingConfiguration#thing_connectivity_indexing_mode}.

---

### IotIndexingConfigurationThingIndexingConfigurationCustomField <a name="IotIndexingConfigurationThingIndexingConfigurationCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

const iotIndexingConfigurationThingIndexingConfigurationCustomField: iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

### IotIndexingConfigurationThingIndexingConfigurationFilter <a name="IotIndexingConfigurationThingIndexingConfigurationFilter" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

const iotIndexingConfigurationThingIndexingConfigurationFilter: iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter.property.namedShadowNames">namedShadowNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#named_shadow_names IotIndexingConfiguration#named_shadow_names}. |

---

##### `namedShadowNames`<sup>Optional</sup> <a name="namedShadowNames" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter.property.namedShadowNames"></a>

```typescript
public readonly namedShadowNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#named_shadow_names IotIndexingConfiguration#named_shadow_names}.

---

### IotIndexingConfigurationThingIndexingConfigurationManagedField <a name="IotIndexingConfigurationThingIndexingConfigurationManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

const iotIndexingConfigurationThingIndexingConfigurationManagedField: iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList <a name="IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.get"></a>

```typescript
public get(index: number): IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>[]

---


### IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference <a name="IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationCustomField;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>

---


### IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList <a name="IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.get"></a>

```typescript
public get(index: number): IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>[]

---


### IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference <a name="IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationManagedField;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>

---


### IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference <a name="IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putCustomField">putCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putManagedField">putManagedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetCustomField">resetCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetManagedField">resetManagedField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomField` <a name="putCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putCustomField"></a>

```typescript
public putCustomField(value: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putCustomField.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>[]

---

##### `putManagedField` <a name="putManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putManagedField"></a>

```typescript
public putManagedField(value: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putManagedField.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>[]

---

##### `resetCustomField` <a name="resetCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetCustomField"></a>

```typescript
public resetCustomField(): void
```

##### `resetManagedField` <a name="resetManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetManagedField"></a>

```typescript
public resetManagedField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customField">customField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedField">managedField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customFieldInput">customFieldInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedFieldInput">managedFieldInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingModeInput">thingGroupIndexingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingMode">thingGroupIndexingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customField`<sup>Required</sup> <a name="customField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customField"></a>

```typescript
public readonly customField: IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList</a>

---

##### `managedField`<sup>Required</sup> <a name="managedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedField"></a>

```typescript
public readonly managedField: IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList</a>

---

##### `customFieldInput`<sup>Optional</sup> <a name="customFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customFieldInput"></a>

```typescript
public readonly customFieldInput: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField">IotIndexingConfigurationThingGroupIndexingConfigurationCustomField</a>[]

---

##### `managedFieldInput`<sup>Optional</sup> <a name="managedFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedFieldInput"></a>

```typescript
public readonly managedFieldInput: IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField">IotIndexingConfigurationThingGroupIndexingConfigurationManagedField</a>[]

---

##### `thingGroupIndexingModeInput`<sup>Optional</sup> <a name="thingGroupIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingModeInput"></a>

```typescript
public readonly thingGroupIndexingModeInput: string;
```

- *Type:* string

---

##### `thingGroupIndexingMode`<sup>Required</sup> <a name="thingGroupIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingMode"></a>

```typescript
public readonly thingGroupIndexingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotIndexingConfigurationThingGroupIndexingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

---


### IotIndexingConfigurationThingIndexingConfigurationCustomFieldList <a name="IotIndexingConfigurationThingIndexingConfigurationCustomFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.get"></a>

```typescript
public get(index: number): IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotIndexingConfigurationThingIndexingConfigurationCustomField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>[]

---


### IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotIndexingConfigurationThingIndexingConfigurationCustomField;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>

---


### IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.resetNamedShadowNames">resetNamedShadowNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamedShadowNames` <a name="resetNamedShadowNames" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.resetNamedShadowNames"></a>

```typescript
public resetNamedShadowNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.namedShadowNamesInput">namedShadowNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.namedShadowNames">namedShadowNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter">IotIndexingConfigurationThingIndexingConfigurationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namedShadowNamesInput`<sup>Optional</sup> <a name="namedShadowNamesInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.namedShadowNamesInput"></a>

```typescript
public readonly namedShadowNamesInput: string[];
```

- *Type:* string[]

---

##### `namedShadowNames`<sup>Required</sup> <a name="namedShadowNames" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.namedShadowNames"></a>

```typescript
public readonly namedShadowNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotIndexingConfigurationThingIndexingConfigurationFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter">IotIndexingConfigurationThingIndexingConfigurationFilter</a>

---


### IotIndexingConfigurationThingIndexingConfigurationManagedFieldList <a name="IotIndexingConfigurationThingIndexingConfigurationManagedFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.get"></a>

```typescript
public get(index: number): IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotIndexingConfigurationThingIndexingConfigurationManagedField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>[]

---


### IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotIndexingConfigurationThingIndexingConfigurationManagedField;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>

---


### IotIndexingConfigurationThingIndexingConfigurationOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer"></a>

```typescript
import { iotIndexingConfiguration } from '@cdktf/provider-aws'

new iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putCustomField">putCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putManagedField">putManagedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetCustomField">resetCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetDeviceDefenderIndexingMode">resetDeviceDefenderIndexingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetManagedField">resetManagedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetNamedShadowIndexingMode">resetNamedShadowIndexingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetThingConnectivityIndexingMode">resetThingConnectivityIndexingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomField` <a name="putCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putCustomField"></a>

```typescript
public putCustomField(value: IResolvable | IotIndexingConfigurationThingIndexingConfigurationCustomField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putCustomField.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>[]

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putFilter"></a>

```typescript
public putFilter(value: IotIndexingConfigurationThingIndexingConfigurationFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter">IotIndexingConfigurationThingIndexingConfigurationFilter</a>

---

##### `putManagedField` <a name="putManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putManagedField"></a>

```typescript
public putManagedField(value: IResolvable | IotIndexingConfigurationThingIndexingConfigurationManagedField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putManagedField.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>[]

---

##### `resetCustomField` <a name="resetCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetCustomField"></a>

```typescript
public resetCustomField(): void
```

##### `resetDeviceDefenderIndexingMode` <a name="resetDeviceDefenderIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetDeviceDefenderIndexingMode"></a>

```typescript
public resetDeviceDefenderIndexingMode(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetManagedField` <a name="resetManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetManagedField"></a>

```typescript
public resetManagedField(): void
```

##### `resetNamedShadowIndexingMode` <a name="resetNamedShadowIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetNamedShadowIndexingMode"></a>

```typescript
public resetNamedShadowIndexingMode(): void
```

##### `resetThingConnectivityIndexingMode` <a name="resetThingConnectivityIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetThingConnectivityIndexingMode"></a>

```typescript
public resetThingConnectivityIndexingMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customField">customField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingIndexingConfigurationCustomFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference">IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedField">managedField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingIndexingConfigurationManagedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customFieldInput">customFieldInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingModeInput">deviceDefenderIndexingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter">IotIndexingConfigurationThingIndexingConfigurationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedFieldInput">managedFieldInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingModeInput">namedShadowIndexingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingModeInput">thingConnectivityIndexingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingModeInput">thingIndexingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingMode">deviceDefenderIndexingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingMode">namedShadowIndexingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingMode">thingConnectivityIndexingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingMode">thingIndexingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customField`<sup>Required</sup> <a name="customField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customField"></a>

```typescript
public readonly customField: IotIndexingConfigurationThingIndexingConfigurationCustomFieldList;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingIndexingConfigurationCustomFieldList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.filter"></a>

```typescript
public readonly filter: IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference">IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference</a>

---

##### `managedField`<sup>Required</sup> <a name="managedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedField"></a>

```typescript
public readonly managedField: IotIndexingConfigurationThingIndexingConfigurationManagedFieldList;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingIndexingConfigurationManagedFieldList</a>

---

##### `customFieldInput`<sup>Optional</sup> <a name="customFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customFieldInput"></a>

```typescript
public readonly customFieldInput: IResolvable | IotIndexingConfigurationThingIndexingConfigurationCustomField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField">IotIndexingConfigurationThingIndexingConfigurationCustomField</a>[]

---

##### `deviceDefenderIndexingModeInput`<sup>Optional</sup> <a name="deviceDefenderIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingModeInput"></a>

```typescript
public readonly deviceDefenderIndexingModeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IotIndexingConfigurationThingIndexingConfigurationFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationFilter">IotIndexingConfigurationThingIndexingConfigurationFilter</a>

---

##### `managedFieldInput`<sup>Optional</sup> <a name="managedFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedFieldInput"></a>

```typescript
public readonly managedFieldInput: IResolvable | IotIndexingConfigurationThingIndexingConfigurationManagedField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField">IotIndexingConfigurationThingIndexingConfigurationManagedField</a>[]

---

##### `namedShadowIndexingModeInput`<sup>Optional</sup> <a name="namedShadowIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingModeInput"></a>

```typescript
public readonly namedShadowIndexingModeInput: string;
```

- *Type:* string

---

##### `thingConnectivityIndexingModeInput`<sup>Optional</sup> <a name="thingConnectivityIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingModeInput"></a>

```typescript
public readonly thingConnectivityIndexingModeInput: string;
```

- *Type:* string

---

##### `thingIndexingModeInput`<sup>Optional</sup> <a name="thingIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingModeInput"></a>

```typescript
public readonly thingIndexingModeInput: string;
```

- *Type:* string

---

##### `deviceDefenderIndexingMode`<sup>Required</sup> <a name="deviceDefenderIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingMode"></a>

```typescript
public readonly deviceDefenderIndexingMode: string;
```

- *Type:* string

---

##### `namedShadowIndexingMode`<sup>Required</sup> <a name="namedShadowIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingMode"></a>

```typescript
public readonly namedShadowIndexingMode: string;
```

- *Type:* string

---

##### `thingConnectivityIndexingMode`<sup>Required</sup> <a name="thingConnectivityIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingMode"></a>

```typescript
public readonly thingConnectivityIndexingMode: string;
```

- *Type:* string

---

##### `thingIndexingMode`<sup>Required</sup> <a name="thingIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingMode"></a>

```typescript
public readonly thingIndexingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotIndexingConfigurationThingIndexingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

---



