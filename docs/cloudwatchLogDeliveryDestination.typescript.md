# `cloudwatchLogDeliveryDestination` Submodule <a name="`cloudwatchLogDeliveryDestination` Submodule" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogDeliveryDestination <a name="CloudwatchLogDeliveryDestination" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination aws_cloudwatch_log_delivery_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer"></a>

```typescript
import { cloudwatchLogDeliveryDestination } from '@cdktf/provider-aws'

new cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination(scope: Construct, id: string, config: CloudwatchLogDeliveryDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig">CloudwatchLogDeliveryDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig">CloudwatchLogDeliveryDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.putDeliveryDestinationConfiguration">putDeliveryDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetDeliveryDestinationConfiguration">resetDeliveryDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeliveryDestinationConfiguration` <a name="putDeliveryDestinationConfiguration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.putDeliveryDestinationConfiguration"></a>

```typescript
public putDeliveryDestinationConfiguration(value: IResolvable | CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.putDeliveryDestinationConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>[]

---

##### `resetDeliveryDestinationConfiguration` <a name="resetDeliveryDestinationConfiguration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetDeliveryDestinationConfiguration"></a>

```typescript
public resetDeliveryDestinationConfiguration(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchLogDeliveryDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isConstruct"></a>

```typescript
import { cloudwatchLogDeliveryDestination } from '@cdktf/provider-aws'

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformElement"></a>

```typescript
import { cloudwatchLogDeliveryDestination } from '@cdktf/provider-aws'

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformResource"></a>

```typescript
import { cloudwatchLogDeliveryDestination } from '@cdktf/provider-aws'

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport"></a>

```typescript
import { cloudwatchLogDeliveryDestination } from '@cdktf/provider-aws'

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudwatchLogDeliveryDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchLogDeliveryDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchLogDeliveryDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchLogDeliveryDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationConfiguration">deliveryDestinationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList">CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationType">deliveryDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationConfigurationInput">deliveryDestinationConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deliveryDestinationConfiguration`<sup>Required</sup> <a name="deliveryDestinationConfiguration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationConfiguration"></a>

```typescript
public readonly deliveryDestinationConfiguration: CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList">CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList</a>

---

##### `deliveryDestinationType`<sup>Required</sup> <a name="deliveryDestinationType" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationType"></a>

```typescript
public readonly deliveryDestinationType: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deliveryDestinationConfigurationInput`<sup>Optional</sup> <a name="deliveryDestinationConfigurationInput" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationConfigurationInput"></a>

```typescript
public readonly deliveryDestinationConfigurationInput: IResolvable | CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogDeliveryDestinationConfig <a name="CloudwatchLogDeliveryDestinationConfig" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.Initializer"></a>

```typescript
import { cloudwatchLogDeliveryDestination } from '@cdktf/provider-aws'

const cloudwatchLogDeliveryDestinationConfig: cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#name CloudwatchLogDeliveryDestination#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.deliveryDestinationConfiguration">deliveryDestinationConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>[]</code> | delivery_destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.outputFormat">outputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#output_format CloudwatchLogDeliveryDestination#output_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#tags CloudwatchLogDeliveryDestination#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#name CloudwatchLogDeliveryDestination#name}.

---

##### `deliveryDestinationConfiguration`<sup>Optional</sup> <a name="deliveryDestinationConfiguration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.deliveryDestinationConfiguration"></a>

```typescript
public readonly deliveryDestinationConfiguration: IResolvable | CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>[]

delivery_destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#delivery_destination_configuration CloudwatchLogDeliveryDestination#delivery_destination_configuration}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#output_format CloudwatchLogDeliveryDestination#output_format}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#region CloudwatchLogDeliveryDestination#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#tags CloudwatchLogDeliveryDestination#tags}.

---

### CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration <a name="CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration.Initializer"></a>

```typescript
import { cloudwatchLogDeliveryDestination } from '@cdktf/provider-aws'

const cloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration: cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration.property.destinationResourceArn">destinationResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#destination_resource_arn CloudwatchLogDeliveryDestination#destination_resource_arn}. |

---

##### `destinationResourceArn`<sup>Required</sup> <a name="destinationResourceArn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration.property.destinationResourceArn"></a>

```typescript
public readonly destinationResourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#destination_resource_arn CloudwatchLogDeliveryDestination#destination_resource_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList <a name="CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer"></a>

```typescript
import { cloudwatchLogDeliveryDestination } from '@cdktf/provider-aws'

new cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.get"></a>

```typescript
public get(index: number): CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>[]

---


### CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference <a name="CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchLogDeliveryDestination } from '@cdktf/provider-aws'

new cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.destinationResourceArnInput">destinationResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.destinationResourceArn">destinationResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationResourceArnInput`<sup>Optional</sup> <a name="destinationResourceArnInput" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.destinationResourceArnInput"></a>

```typescript
public readonly destinationResourceArnInput: string;
```

- *Type:* string

---

##### `destinationResourceArn`<sup>Required</sup> <a name="destinationResourceArn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.destinationResourceArn"></a>

```typescript
public readonly destinationResourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>

---



