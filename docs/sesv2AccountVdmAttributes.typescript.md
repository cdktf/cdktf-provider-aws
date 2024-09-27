# `sesv2AccountVdmAttributes` Submodule <a name="`sesv2AccountVdmAttributes` Submodule" id="@cdktf/provider-aws.sesv2AccountVdmAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2AccountVdmAttributes <a name="Sesv2AccountVdmAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes aws_sesv2_account_vdm_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

new sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes(scope: Construct, id: string, config: Sesv2AccountVdmAttributesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig">Sesv2AccountVdmAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig">Sesv2AccountVdmAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes">putDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes">putGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetDashboardAttributes">resetDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetGuardianAttributes">resetGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDashboardAttributes` <a name="putDashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes"></a>

```typescript
public putDashboardAttributes(value: Sesv2AccountVdmAttributesDashboardAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---

##### `putGuardianAttributes` <a name="putGuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes"></a>

```typescript
public putGuardianAttributes(value: Sesv2AccountVdmAttributesGuardianAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---

##### `resetDashboardAttributes` <a name="resetDashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetDashboardAttributes"></a>

```typescript
public resetDashboardAttributes(): void
```

##### `resetGuardianAttributes` <a name="resetGuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetGuardianAttributes"></a>

```typescript
public resetGuardianAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Sesv2AccountVdmAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Sesv2AccountVdmAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Sesv2AccountVdmAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Sesv2AccountVdmAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Sesv2AccountVdmAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributes">dashboardAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference">Sesv2AccountVdmAttributesDashboardAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributes">guardianAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference">Sesv2AccountVdmAttributesGuardianAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributesInput">dashboardAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributesInput">guardianAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabledInput">vdmEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabled">vdmEnabled</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dashboardAttributes`<sup>Required</sup> <a name="dashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributes"></a>

```typescript
public readonly dashboardAttributes: Sesv2AccountVdmAttributesDashboardAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference">Sesv2AccountVdmAttributesDashboardAttributesOutputReference</a>

---

##### `guardianAttributes`<sup>Required</sup> <a name="guardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributes"></a>

```typescript
public readonly guardianAttributes: Sesv2AccountVdmAttributesGuardianAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference">Sesv2AccountVdmAttributesGuardianAttributesOutputReference</a>

---

##### `dashboardAttributesInput`<sup>Optional</sup> <a name="dashboardAttributesInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributesInput"></a>

```typescript
public readonly dashboardAttributesInput: Sesv2AccountVdmAttributesDashboardAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---

##### `guardianAttributesInput`<sup>Optional</sup> <a name="guardianAttributesInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributesInput"></a>

```typescript
public readonly guardianAttributesInput: Sesv2AccountVdmAttributesGuardianAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `vdmEnabledInput`<sup>Optional</sup> <a name="vdmEnabledInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabledInput"></a>

```typescript
public readonly vdmEnabledInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vdmEnabled`<sup>Required</sup> <a name="vdmEnabled" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabled"></a>

```typescript
public readonly vdmEnabled: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2AccountVdmAttributesConfig <a name="Sesv2AccountVdmAttributesConfig" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.Initializer"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

const sesv2AccountVdmAttributesConfig: sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.vdmEnabled">vdmEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dashboardAttributes">dashboardAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | dashboard_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.guardianAttributes">guardianAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | guardian_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vdmEnabled`<sup>Required</sup> <a name="vdmEnabled" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.vdmEnabled"></a>

```typescript
public readonly vdmEnabled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}.

---

##### `dashboardAttributes`<sup>Optional</sup> <a name="dashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dashboardAttributes"></a>

```typescript
public readonly dashboardAttributes: Sesv2AccountVdmAttributesDashboardAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

dashboard_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#dashboard_attributes Sesv2AccountVdmAttributes#dashboard_attributes}

---

##### `guardianAttributes`<sup>Optional</sup> <a name="guardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.guardianAttributes"></a>

```typescript
public readonly guardianAttributes: Sesv2AccountVdmAttributesGuardianAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

guardian_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#guardian_attributes Sesv2AccountVdmAttributes#guardian_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### Sesv2AccountVdmAttributesDashboardAttributes <a name="Sesv2AccountVdmAttributesDashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.Initializer"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

const sesv2AccountVdmAttributesDashboardAttributes: sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.property.engagementMetrics">engagementMetrics</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}. |

---

##### `engagementMetrics`<sup>Optional</sup> <a name="engagementMetrics" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.property.engagementMetrics"></a>

```typescript
public readonly engagementMetrics: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}.

---

### Sesv2AccountVdmAttributesGuardianAttributes <a name="Sesv2AccountVdmAttributesGuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.Initializer"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

const sesv2AccountVdmAttributesGuardianAttributes: sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}. |

---

##### `optimizedSharedDelivery`<sup>Optional</sup> <a name="optimizedSharedDelivery" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.property.optimizedSharedDelivery"></a>

```typescript
public readonly optimizedSharedDelivery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2AccountVdmAttributesDashboardAttributesOutputReference <a name="Sesv2AccountVdmAttributesDashboardAttributesOutputReference" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

new sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics">resetEngagementMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEngagementMetrics` <a name="resetEngagementMetrics" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics"></a>

```typescript
public resetEngagementMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput">engagementMetricsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics">engagementMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engagementMetricsInput`<sup>Optional</sup> <a name="engagementMetricsInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput"></a>

```typescript
public readonly engagementMetricsInput: string;
```

- *Type:* string

---

##### `engagementMetrics`<sup>Required</sup> <a name="engagementMetrics" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics"></a>

```typescript
public readonly engagementMetrics: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Sesv2AccountVdmAttributesDashboardAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---


### Sesv2AccountVdmAttributesGuardianAttributesOutputReference <a name="Sesv2AccountVdmAttributesGuardianAttributesOutputReference" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer"></a>

```typescript
import { sesv2AccountVdmAttributes } from '@cdktf/provider-aws'

new sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery">resetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptimizedSharedDelivery` <a name="resetOptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery"></a>

```typescript
public resetOptimizedSharedDelivery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput">optimizedSharedDeliveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optimizedSharedDeliveryInput`<sup>Optional</sup> <a name="optimizedSharedDeliveryInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput"></a>

```typescript
public readonly optimizedSharedDeliveryInput: string;
```

- *Type:* string

---

##### `optimizedSharedDelivery`<sup>Required</sup> <a name="optimizedSharedDelivery" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery"></a>

```typescript
public readonly optimizedSharedDelivery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Sesv2AccountVdmAttributesGuardianAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---



