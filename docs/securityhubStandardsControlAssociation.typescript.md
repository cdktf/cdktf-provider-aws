# `securityhubStandardsControlAssociation` Submodule <a name="`securityhubStandardsControlAssociation` Submodule" id="@cdktf/provider-aws.securityhubStandardsControlAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubStandardsControlAssociation <a name="SecurityhubStandardsControlAssociation" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association aws_securityhub_standards_control_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer"></a>

```typescript
import { securityhubStandardsControlAssociation } from '@cdktf/provider-aws'

new securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation(scope: Construct, id: string, config: SecurityhubStandardsControlAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig">SecurityhubStandardsControlAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig">SecurityhubStandardsControlAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.resetUpdatedReason">resetUpdatedReason</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetUpdatedReason` <a name="resetUpdatedReason" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.resetUpdatedReason"></a>

```typescript
public resetUpdatedReason(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityhubStandardsControlAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isConstruct"></a>

```typescript
import { securityhubStandardsControlAssociation } from '@cdktf/provider-aws'

securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformElement"></a>

```typescript
import { securityhubStandardsControlAssociation } from '@cdktf/provider-aws'

securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformResource"></a>

```typescript
import { securityhubStandardsControlAssociation } from '@cdktf/provider-aws'

securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport"></a>

```typescript
import { securityhubStandardsControlAssociation } from '@cdktf/provider-aws'

securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityhubStandardsControlAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubStandardsControlAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubStandardsControlAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityhubStandardsControlAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.associationStatusInput">associationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.securityControlIdInput">securityControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.standardsArnInput">standardsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.updatedReasonInput">updatedReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.associationStatus">associationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.securityControlId">securityControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.standardsArn">standardsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.updatedReason">updatedReason</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `associationStatusInput`<sup>Optional</sup> <a name="associationStatusInput" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.associationStatusInput"></a>

```typescript
public readonly associationStatusInput: string;
```

- *Type:* string

---

##### `securityControlIdInput`<sup>Optional</sup> <a name="securityControlIdInput" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.securityControlIdInput"></a>

```typescript
public readonly securityControlIdInput: string;
```

- *Type:* string

---

##### `standardsArnInput`<sup>Optional</sup> <a name="standardsArnInput" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.standardsArnInput"></a>

```typescript
public readonly standardsArnInput: string;
```

- *Type:* string

---

##### `updatedReasonInput`<sup>Optional</sup> <a name="updatedReasonInput" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.updatedReasonInput"></a>

```typescript
public readonly updatedReasonInput: string;
```

- *Type:* string

---

##### `associationStatus`<sup>Required</sup> <a name="associationStatus" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.associationStatus"></a>

```typescript
public readonly associationStatus: string;
```

- *Type:* string

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.standardsArn"></a>

```typescript
public readonly standardsArn: string;
```

- *Type:* string

---

##### `updatedReason`<sup>Required</sup> <a name="updatedReason" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.updatedReason"></a>

```typescript
public readonly updatedReason: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubStandardsControlAssociationConfig <a name="SecurityhubStandardsControlAssociationConfig" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.Initializer"></a>

```typescript
import { securityhubStandardsControlAssociation } from '@cdktf/provider-aws'

const securityhubStandardsControlAssociationConfig: securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.associationStatus">associationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association#association_status SecurityhubStandardsControlAssociation#association_status}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.securityControlId">securityControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association#security_control_id SecurityhubStandardsControlAssociation#security_control_id}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.standardsArn">standardsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association#standards_arn SecurityhubStandardsControlAssociation#standards_arn}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.updatedReason">updatedReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association#updated_reason SecurityhubStandardsControlAssociation#updated_reason}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associationStatus`<sup>Required</sup> <a name="associationStatus" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.associationStatus"></a>

```typescript
public readonly associationStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association#association_status SecurityhubStandardsControlAssociation#association_status}.

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association#security_control_id SecurityhubStandardsControlAssociation#security_control_id}.

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.standardsArn"></a>

```typescript
public readonly standardsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association#standards_arn SecurityhubStandardsControlAssociation#standards_arn}.

---

##### `updatedReason`<sup>Optional</sup> <a name="updatedReason" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.updatedReason"></a>

```typescript
public readonly updatedReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/securityhub_standards_control_association#updated_reason SecurityhubStandardsControlAssociation#updated_reason}.

---



