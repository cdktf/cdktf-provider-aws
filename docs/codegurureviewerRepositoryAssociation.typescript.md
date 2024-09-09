# `codegurureviewerRepositoryAssociation` Submodule <a name="`codegurureviewerRepositoryAssociation` Submodule" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodegurureviewerRepositoryAssociation <a name="CodegurureviewerRepositoryAssociation" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association aws_codegurureviewer_repository_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation(scope: Construct, id: string, config: CodegurureviewerRepositoryAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig">CodegurureviewerRepositoryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig">CodegurureviewerRepositoryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails">putKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository">putRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetKmsKeyDetails">resetKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKmsKeyDetails` <a name="putKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails"></a>

```typescript
public putKmsKeyDetails(value: CodegurureviewerRepositoryAssociationKmsKeyDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---

##### `putRepository` <a name="putRepository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository"></a>

```typescript
public putRepository(value: CodegurureviewerRepositoryAssociationRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: CodegurureviewerRepositoryAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyDetails` <a name="resetKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetKmsKeyDetails"></a>

```typescript
public resetKmsKeyDetails(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodegurureviewerRepositoryAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CodegurureviewerRepositoryAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodegurureviewerRepositoryAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodegurureviewerRepositoryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodegurureviewerRepositoryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn">connectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetails">kmsKeyDetails</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference">CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repository">repository</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference">CodegurureviewerRepositoryAssociationRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.s3RepositoryDetails">s3RepositoryDetails</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference">CodegurureviewerRepositoryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetailsInput">kmsKeyDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repositoryInput">repositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

---

##### `kmsKeyDetails`<sup>Required</sup> <a name="kmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetails"></a>

```typescript
public readonly kmsKeyDetails: CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference">CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repository"></a>

```typescript
public readonly repository: CodegurureviewerRepositoryAssociationRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference">CodegurureviewerRepositoryAssociationRepositoryOutputReference</a>

---

##### `s3RepositoryDetails`<sup>Required</sup> <a name="s3RepositoryDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.s3RepositoryDetails"></a>

```typescript
public readonly s3RepositoryDetails: CodegurureviewerRepositoryAssociationS3RepositoryDetailsList;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: CodegurureviewerRepositoryAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference">CodegurureviewerRepositoryAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyDetailsInput`<sup>Optional</sup> <a name="kmsKeyDetailsInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetailsInput"></a>

```typescript
public readonly kmsKeyDetailsInput: CodegurureviewerRepositoryAssociationKmsKeyDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: CodegurureviewerRepositoryAssociationRepository;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CodegurureviewerRepositoryAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodegurureviewerRepositoryAssociationConfig <a name="CodegurureviewerRepositoryAssociationConfig" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationConfig: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.repository">repository</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | repository block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.kmsKeyDetails">kmsKeyDetails</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | kms_key_details block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.repository"></a>

```typescript
public readonly repository: CodegurureviewerRepositoryAssociationRepository;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#repository CodegurureviewerRepositoryAssociation#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyDetails`<sup>Optional</sup> <a name="kmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.kmsKeyDetails"></a>

```typescript
public readonly kmsKeyDetails: CodegurureviewerRepositoryAssociationKmsKeyDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

kms_key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#kms_key_details CodegurureviewerRepositoryAssociation#kms_key_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CodegurureviewerRepositoryAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#timeouts CodegurureviewerRepositoryAssociation#timeouts}

---

### CodegurureviewerRepositoryAssociationKmsKeyDetails <a name="CodegurureviewerRepositoryAssociationKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationKmsKeyDetails: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}. |

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}.

---

### CodegurureviewerRepositoryAssociationRepository <a name="CodegurureviewerRepositoryAssociationRepository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationRepository: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.bitbucket">bitbucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | bitbucket block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.codecommit">codecommit</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | codecommit block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.githubEnterpriseServer">githubEnterpriseServer</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | github_enterprise_server block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.s3Bucket">s3Bucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | s3_bucket block. |

---

##### `bitbucket`<sup>Optional</sup> <a name="bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.bitbucket"></a>

```typescript
public readonly bitbucket: CodegurureviewerRepositoryAssociationRepositoryBitbucket;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

bitbucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#bitbucket CodegurureviewerRepositoryAssociation#bitbucket}

---

##### `codecommit`<sup>Optional</sup> <a name="codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.codecommit"></a>

```typescript
public readonly codecommit: CodegurureviewerRepositoryAssociationRepositoryCodecommit;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

codecommit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#codecommit CodegurureviewerRepositoryAssociation#codecommit}

---

##### `githubEnterpriseServer`<sup>Optional</sup> <a name="githubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.githubEnterpriseServer"></a>

```typescript
public readonly githubEnterpriseServer: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

github_enterprise_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#github_enterprise_server CodegurureviewerRepositoryAssociation#github_enterprise_server}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: CodegurureviewerRepositoryAssociationRepositoryS3Bucket;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

s3_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#s3_bucket CodegurureviewerRepositoryAssociation#s3_bucket}

---

### CodegurureviewerRepositoryAssociationRepositoryBitbucket <a name="CodegurureviewerRepositoryAssociationRepositoryBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationRepositoryBitbucket: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.connectionArn">connectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}. |

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

### CodegurureviewerRepositoryAssociationRepositoryCodecommit <a name="CodegurureviewerRepositoryAssociationRepositoryCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationRepositoryCodecommit: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

### CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer <a name="CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.connectionArn">connectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}. |

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

### CodegurureviewerRepositoryAssociationRepositoryS3Bucket <a name="CodegurureviewerRepositoryAssociationRepositoryS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationRepositoryS3Bucket: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

### CodegurureviewerRepositoryAssociationS3RepositoryDetails <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationS3RepositoryDetails: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails = { ... }
```


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts = { ... }
```


### CodegurureviewerRepositoryAssociationTimeouts <a name="CodegurureviewerRepositoryAssociationTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

const codegurureviewerRepositoryAssociationTimeouts: codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference <a name="CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetEncryptionOption"></a>

```typescript
public resetEncryptionOption(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOptionInput"></a>

```typescript
public readonly encryptionOptionInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodegurureviewerRepositoryAssociationKmsKeyDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---


### CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArnInput">connectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArn">connectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArnInput"></a>

```typescript
public readonly connectionArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodegurureviewerRepositoryAssociationRepositoryBitbucket;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---


### CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodegurureviewerRepositoryAssociationRepositoryCodecommit;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---


### CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArnInput">connectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArn">connectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArnInput"></a>

```typescript
public readonly connectionArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---


### CodegurureviewerRepositoryAssociationRepositoryOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket">putBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit">putCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer">putGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket">putS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetBitbucket">resetBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetCodecommit">resetCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetGithubEnterpriseServer">resetGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBitbucket` <a name="putBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket"></a>

```typescript
public putBitbucket(value: CodegurureviewerRepositoryAssociationRepositoryBitbucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---

##### `putCodecommit` <a name="putCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit"></a>

```typescript
public putCodecommit(value: CodegurureviewerRepositoryAssociationRepositoryCodecommit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---

##### `putGithubEnterpriseServer` <a name="putGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer"></a>

```typescript
public putGithubEnterpriseServer(value: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---

##### `putS3Bucket` <a name="putS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket"></a>

```typescript
public putS3Bucket(value: CodegurureviewerRepositoryAssociationRepositoryS3Bucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---

##### `resetBitbucket` <a name="resetBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetBitbucket"></a>

```typescript
public resetBitbucket(): void
```

##### `resetCodecommit` <a name="resetCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetCodecommit"></a>

```typescript
public resetCodecommit(): void
```

##### `resetGithubEnterpriseServer` <a name="resetGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetGithubEnterpriseServer"></a>

```typescript
public resetGithubEnterpriseServer(): void
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucket">bitbucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommit">codecommit</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference">CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServer">githubEnterpriseServer</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3Bucket">s3Bucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucketInput">bitbucketInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommitInput">codecommitInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServerInput">githubEnterpriseServerInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bitbucket`<sup>Required</sup> <a name="bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucket"></a>

```typescript
public readonly bitbucket: CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference</a>

---

##### `codecommit`<sup>Required</sup> <a name="codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommit"></a>

```typescript
public readonly codecommit: CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference">CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference</a>

---

##### `githubEnterpriseServer`<sup>Required</sup> <a name="githubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServer"></a>

```typescript
public readonly githubEnterpriseServer: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference</a>

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference</a>

---

##### `bitbucketInput`<sup>Optional</sup> <a name="bitbucketInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucketInput"></a>

```typescript
public readonly bitbucketInput: CodegurureviewerRepositoryAssociationRepositoryBitbucket;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---

##### `codecommitInput`<sup>Optional</sup> <a name="codecommitInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommitInput"></a>

```typescript
public readonly codecommitInput: CodegurureviewerRepositoryAssociationRepositoryCodecommit;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---

##### `githubEnterpriseServerInput`<sup>Optional</sup> <a name="githubEnterpriseServerInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServerInput"></a>

```typescript
public readonly githubEnterpriseServerInput: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: CodegurureviewerRepositoryAssociationRepositoryS3Bucket;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodegurureviewerRepositoryAssociationRepository;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---


### CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodegurureviewerRepositoryAssociationRepositoryS3Bucket;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get"></a>

```typescript
public get(index: number): CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.buildArtifactsObjectKey">buildArtifactsObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.sourceCodeArtifactsObjectKey">sourceCodeArtifactsObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildArtifactsObjectKey`<sup>Required</sup> <a name="buildArtifactsObjectKey" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.buildArtifactsObjectKey"></a>

```typescript
public readonly buildArtifactsObjectKey: string;
```

- *Type:* string

---

##### `sourceCodeArtifactsObjectKey`<sup>Required</sup> <a name="sourceCodeArtifactsObjectKey" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.sourceCodeArtifactsObjectKey"></a>

```typescript
public readonly sourceCodeArtifactsObjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts</a>

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsList <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsList" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get"></a>

```typescript
public get(index: number): CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.codeArtifacts">codeArtifacts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails">CodegurureviewerRepositoryAssociationS3RepositoryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `codeArtifacts`<sup>Required</sup> <a name="codeArtifacts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.codeArtifacts"></a>

```typescript
public readonly codeArtifacts: CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodegurureviewerRepositoryAssociationS3RepositoryDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails">CodegurureviewerRepositoryAssociationS3RepositoryDetails</a>

---


### CodegurureviewerRepositoryAssociationTimeoutsOutputReference <a name="CodegurureviewerRepositoryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { codegurureviewerRepositoryAssociation } from '@cdktf/provider-aws'

new codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodegurureviewerRepositoryAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

---



