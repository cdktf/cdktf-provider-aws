# `guarddutyOrganizationConfigurationFeature` Submodule <a name="`guarddutyOrganizationConfigurationFeature` Submodule" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyOrganizationConfigurationFeature <a name="GuarddutyOrganizationConfigurationFeature" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature aws_guardduty_organization_configuration_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer"></a>

```typescript
import { guarddutyOrganizationConfigurationFeature } from '@cdktf/provider-aws'

new guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationFeatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig">GuarddutyOrganizationConfigurationFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig">GuarddutyOrganizationConfigurationFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.putAdditionalConfiguration">putAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetAdditionalConfiguration">resetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalConfiguration` <a name="putAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.putAdditionalConfiguration"></a>

```typescript
public putAdditionalConfiguration(value: IResolvable | GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.putAdditionalConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]

---

##### `resetAdditionalConfiguration` <a name="resetAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetAdditionalConfiguration"></a>

```typescript
public resetAdditionalConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GuarddutyOrganizationConfigurationFeature resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isConstruct"></a>

```typescript
import { guarddutyOrganizationConfigurationFeature } from '@cdktf/provider-aws'

guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformElement"></a>

```typescript
import { guarddutyOrganizationConfigurationFeature } from '@cdktf/provider-aws'

guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformResource"></a>

```typescript
import { guarddutyOrganizationConfigurationFeature } from '@cdktf/provider-aws'

guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport"></a>

```typescript
import { guarddutyOrganizationConfigurationFeature } from '@cdktf/provider-aws'

guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GuarddutyOrganizationConfigurationFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyOrganizationConfigurationFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyOrganizationConfigurationFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GuarddutyOrganizationConfigurationFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.additionalConfiguration">additionalConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList">GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.additionalConfigurationInput">additionalConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.autoEnableInput">autoEnableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.autoEnable">autoEnable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalConfiguration`<sup>Required</sup> <a name="additionalConfiguration" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.additionalConfiguration"></a>

```typescript
public readonly additionalConfiguration: GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList">GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList</a>

---

##### `additionalConfigurationInput`<sup>Optional</sup> <a name="additionalConfigurationInput" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.additionalConfigurationInput"></a>

```typescript
public readonly additionalConfigurationInput: IResolvable | GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]

---

##### `autoEnableInput`<sup>Optional</sup> <a name="autoEnableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.autoEnableInput"></a>

```typescript
public readonly autoEnableInput: string;
```

- *Type:* string

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.autoEnable"></a>

```typescript
public readonly autoEnable: string;
```

- *Type:* string

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration <a name="GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.Initializer"></a>

```typescript
import { guarddutyOrganizationConfigurationFeature } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationFeatureAdditionalConfiguration: guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.property.autoEnable">autoEnable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}. |

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.property.autoEnable"></a>

```typescript
public readonly autoEnable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}.

---

### GuarddutyOrganizationConfigurationFeatureConfig <a name="GuarddutyOrganizationConfigurationFeatureConfig" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.Initializer"></a>

```typescript
import { guarddutyOrganizationConfigurationFeature } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationFeatureConfig: guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.autoEnable">autoEnable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#detector_id GuarddutyOrganizationConfigurationFeature#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.additionalConfiguration">additionalConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]</code> | additional_configuration block. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#id GuarddutyOrganizationConfigurationFeature#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.autoEnable"></a>

```typescript
public readonly autoEnable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#detector_id GuarddutyOrganizationConfigurationFeature#detector_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}.

---

##### `additionalConfiguration`<sup>Optional</sup> <a name="additionalConfiguration" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.additionalConfiguration"></a>

```typescript
public readonly additionalConfiguration: IResolvable | GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]

additional_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#additional_configuration GuarddutyOrganizationConfigurationFeature#additional_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/guardduty_organization_configuration_feature#id GuarddutyOrganizationConfigurationFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList <a name="GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer"></a>

```typescript
import { guarddutyOrganizationConfigurationFeature } from '@cdktf/provider-aws'

new guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.get"></a>

```typescript
public get(index: number): GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]

---


### GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference <a name="GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfigurationFeature } from '@cdktf/provider-aws'

new guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.autoEnableInput">autoEnableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.autoEnable">autoEnable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoEnableInput`<sup>Optional</sup> <a name="autoEnableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.autoEnableInput"></a>

```typescript
public readonly autoEnableInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.autoEnable"></a>

```typescript
public readonly autoEnable: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>

---



