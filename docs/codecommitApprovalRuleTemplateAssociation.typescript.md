# `codecommitApprovalRuleTemplateAssociation` Submodule <a name="`codecommitApprovalRuleTemplateAssociation` Submodule" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecommitApprovalRuleTemplateAssociation <a name="CodecommitApprovalRuleTemplateAssociation" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template_association aws_codecommit_approval_rule_template_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer"></a>

```typescript
import { codecommitApprovalRuleTemplateAssociation } from '@cdktf/provider-aws'

new codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation(scope: Construct, id: string, config: CodecommitApprovalRuleTemplateAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig">CodecommitApprovalRuleTemplateAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig">CodecommitApprovalRuleTemplateAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodecommitApprovalRuleTemplateAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct"></a>

```typescript
import { codecommitApprovalRuleTemplateAssociation } from '@cdktf/provider-aws'

codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement"></a>

```typescript
import { codecommitApprovalRuleTemplateAssociation } from '@cdktf/provider-aws'

codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource"></a>

```typescript
import { codecommitApprovalRuleTemplateAssociation } from '@cdktf/provider-aws'

codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport"></a>

```typescript
import { codecommitApprovalRuleTemplateAssociation } from '@cdktf/provider-aws'

codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CodecommitApprovalRuleTemplateAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodecommitApprovalRuleTemplateAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodecommitApprovalRuleTemplateAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodecommitApprovalRuleTemplateAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateNameInput">approvalRuleTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateName">approvalRuleTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalRuleTemplateNameInput`<sup>Optional</sup> <a name="approvalRuleTemplateNameInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateNameInput"></a>

```typescript
public readonly approvalRuleTemplateNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="approvalRuleTemplateName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateName"></a>

```typescript
public readonly approvalRuleTemplateName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodecommitApprovalRuleTemplateAssociationConfig <a name="CodecommitApprovalRuleTemplateAssociationConfig" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.Initializer"></a>

```typescript
import { codecommitApprovalRuleTemplateAssociation } from '@cdktf/provider-aws'

const codecommitApprovalRuleTemplateAssociationConfig: codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.approvalRuleTemplateName">approvalRuleTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="approvalRuleTemplateName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.approvalRuleTemplateName"></a>

```typescript
public readonly approvalRuleTemplateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template_association#region CodecommitApprovalRuleTemplateAssociation#region}

---



