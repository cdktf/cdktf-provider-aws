# `guarddutyMemberDetectorFeature` Submodule <a name="`guarddutyMemberDetectorFeature` Submodule" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyMemberDetectorFeature <a name="GuarddutyMemberDetectorFeature" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature aws_guardduty_member_detector_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer"></a>

```typescript
import { guarddutyMemberDetectorFeature } from '@cdktf/provider-aws'

new guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature(scope: Construct, id: string, config: GuarddutyMemberDetectorFeatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig">GuarddutyMemberDetectorFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig">GuarddutyMemberDetectorFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration">putAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetAdditionalConfiguration">resetAdditionalConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalConfiguration` <a name="putAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration"></a>

```typescript
public putAdditionalConfiguration(value: IResolvable | GuarddutyMemberDetectorFeatureAdditionalConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]

---

##### `resetAdditionalConfiguration` <a name="resetAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetAdditionalConfiguration"></a>

```typescript
public resetAdditionalConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GuarddutyMemberDetectorFeature resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct"></a>

```typescript
import { guarddutyMemberDetectorFeature } from '@cdktf/provider-aws'

guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement"></a>

```typescript
import { guarddutyMemberDetectorFeature } from '@cdktf/provider-aws'

guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource"></a>

```typescript
import { guarddutyMemberDetectorFeature } from '@cdktf/provider-aws'

guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport"></a>

```typescript
import { guarddutyMemberDetectorFeature } from '@cdktf/provider-aws'

guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GuarddutyMemberDetectorFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyMemberDetectorFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyMemberDetectorFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GuarddutyMemberDetectorFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfiguration">additionalConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList">GuarddutyMemberDetectorFeatureAdditionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfigurationInput">additionalConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalConfiguration`<sup>Required</sup> <a name="additionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfiguration"></a>

```typescript
public readonly additionalConfiguration: GuarddutyMemberDetectorFeatureAdditionalConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList">GuarddutyMemberDetectorFeatureAdditionalConfigurationList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `additionalConfigurationInput`<sup>Optional</sup> <a name="additionalConfigurationInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfigurationInput"></a>

```typescript
public readonly additionalConfigurationInput: IResolvable | GuarddutyMemberDetectorFeatureAdditionalConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyMemberDetectorFeatureAdditionalConfiguration <a name="GuarddutyMemberDetectorFeatureAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.Initializer"></a>

```typescript
import { guarddutyMemberDetectorFeature } from '@cdktf/provider-aws'

const guarddutyMemberDetectorFeatureAdditionalConfiguration: guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}.

---

### GuarddutyMemberDetectorFeatureConfig <a name="GuarddutyMemberDetectorFeatureConfig" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.Initializer"></a>

```typescript
import { guarddutyMemberDetectorFeature } from '@cdktf/provider-aws'

const guarddutyMemberDetectorFeatureConfig: guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.additionalConfiguration">additionalConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]</code> | additional_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}.

---

##### `additionalConfiguration`<sup>Optional</sup> <a name="additionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.additionalConfiguration"></a>

```typescript
public readonly additionalConfiguration: IResolvable | GuarddutyMemberDetectorFeatureAdditionalConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]

additional_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/guardduty_member_detector_feature#additional_configuration GuarddutyMemberDetectorFeature#additional_configuration}

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyMemberDetectorFeatureAdditionalConfigurationList <a name="GuarddutyMemberDetectorFeatureAdditionalConfigurationList" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer"></a>

```typescript
import { guarddutyMemberDetectorFeature } from '@cdktf/provider-aws'

new guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get"></a>

```typescript
public get(index: number): GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyMemberDetectorFeatureAdditionalConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>[]

---


### GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference <a name="GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer"></a>

```typescript
import { guarddutyMemberDetectorFeature } from '@cdktf/provider-aws'

new guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyMemberDetectorFeatureAdditionalConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>

---



