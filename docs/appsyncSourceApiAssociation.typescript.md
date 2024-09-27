# `appsyncSourceApiAssociation` Submodule <a name="`appsyncSourceApiAssociation` Submodule" id="@cdktf/provider-aws.appsyncSourceApiAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncSourceApiAssociation <a name="AppsyncSourceApiAssociation" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association aws_appsync_source_api_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

new appsyncSourceApiAssociation.AppsyncSourceApiAssociation(scope: Construct, id: string, config?: AppsyncSourceApiAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig">AppsyncSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig">AppsyncSourceApiAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig">putSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiArn">resetMergedApiArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiId">resetMergedApiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiArn">resetSourceApiArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiAssociationConfig">resetSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiId">resetSourceApiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceApiAssociationConfig` <a name="putSourceApiAssociationConfig" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig"></a>

```typescript
public putSourceApiAssociationConfig(value: IResolvable | AppsyncSourceApiAssociationSourceApiAssociationConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: AppsyncSourceApiAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts">AppsyncSourceApiAssociationTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMergedApiArn` <a name="resetMergedApiArn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiArn"></a>

```typescript
public resetMergedApiArn(): void
```

##### `resetMergedApiId` <a name="resetMergedApiId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiId"></a>

```typescript
public resetMergedApiId(): void
```

##### `resetSourceApiArn` <a name="resetSourceApiArn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiArn"></a>

```typescript
public resetSourceApiArn(): void
```

##### `resetSourceApiAssociationConfig` <a name="resetSourceApiAssociationConfig" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiAssociationConfig"></a>

```typescript
public resetSourceApiAssociationConfig(): void
```

##### `resetSourceApiId` <a name="resetSourceApiId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiId"></a>

```typescript
public resetSourceApiId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppsyncSourceApiAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppsyncSourceApiAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncSourceApiAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncSourceApiAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppsyncSourceApiAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfig">sourceApiAssociationConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList">AppsyncSourceApiAssociationSourceApiAssociationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference">AppsyncSourceApiAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArnInput">mergedApiArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdInput">mergedApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArnInput">sourceApiArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfigInput">sourceApiAssociationConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdInput">sourceApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts">AppsyncSourceApiAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArn">mergedApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiId">mergedApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArn">sourceApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiId">sourceApiId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sourceApiAssociationConfig`<sup>Required</sup> <a name="sourceApiAssociationConfig" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfig"></a>

```typescript
public readonly sourceApiAssociationConfig: AppsyncSourceApiAssociationSourceApiAssociationConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList">AppsyncSourceApiAssociationSourceApiAssociationConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: AppsyncSourceApiAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference">AppsyncSourceApiAssociationTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `mergedApiArnInput`<sup>Optional</sup> <a name="mergedApiArnInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArnInput"></a>

```typescript
public readonly mergedApiArnInput: string;
```

- *Type:* string

---

##### `mergedApiIdInput`<sup>Optional</sup> <a name="mergedApiIdInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdInput"></a>

```typescript
public readonly mergedApiIdInput: string;
```

- *Type:* string

---

##### `sourceApiArnInput`<sup>Optional</sup> <a name="sourceApiArnInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArnInput"></a>

```typescript
public readonly sourceApiArnInput: string;
```

- *Type:* string

---

##### `sourceApiAssociationConfigInput`<sup>Optional</sup> <a name="sourceApiAssociationConfigInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfigInput"></a>

```typescript
public readonly sourceApiAssociationConfigInput: IResolvable | AppsyncSourceApiAssociationSourceApiAssociationConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>[]

---

##### `sourceApiIdInput`<sup>Optional</sup> <a name="sourceApiIdInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdInput"></a>

```typescript
public readonly sourceApiIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppsyncSourceApiAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts">AppsyncSourceApiAssociationTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `mergedApiArn`<sup>Required</sup> <a name="mergedApiArn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArn"></a>

```typescript
public readonly mergedApiArn: string;
```

- *Type:* string

---

##### `mergedApiId`<sup>Required</sup> <a name="mergedApiId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiId"></a>

```typescript
public readonly mergedApiId: string;
```

- *Type:* string

---

##### `sourceApiArn`<sup>Required</sup> <a name="sourceApiArn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArn"></a>

```typescript
public readonly sourceApiArn: string;
```

- *Type:* string

---

##### `sourceApiId`<sup>Required</sup> <a name="sourceApiId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiId"></a>

```typescript
public readonly sourceApiId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncSourceApiAssociationConfig <a name="AppsyncSourceApiAssociationConfig" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

const appsyncSourceApiAssociationConfig: appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#description AppsyncSourceApiAssociation#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiArn">mergedApiArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#merged_api_arn AppsyncSourceApiAssociation#merged_api_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiId">mergedApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#merged_api_id AppsyncSourceApiAssociation#merged_api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiArn">sourceApiArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#source_api_arn AppsyncSourceApiAssociation#source_api_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiAssociationConfig">sourceApiAssociationConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#source_api_association_config AppsyncSourceApiAssociation#source_api_association_config}. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiId">sourceApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#source_api_id AppsyncSourceApiAssociation#source_api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts">AppsyncSourceApiAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#description AppsyncSourceApiAssociation#description}.

---

##### `mergedApiArn`<sup>Optional</sup> <a name="mergedApiArn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiArn"></a>

```typescript
public readonly mergedApiArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#merged_api_arn AppsyncSourceApiAssociation#merged_api_arn}.

---

##### `mergedApiId`<sup>Optional</sup> <a name="mergedApiId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiId"></a>

```typescript
public readonly mergedApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#merged_api_id AppsyncSourceApiAssociation#merged_api_id}.

---

##### `sourceApiArn`<sup>Optional</sup> <a name="sourceApiArn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiArn"></a>

```typescript
public readonly sourceApiArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#source_api_arn AppsyncSourceApiAssociation#source_api_arn}.

---

##### `sourceApiAssociationConfig`<sup>Optional</sup> <a name="sourceApiAssociationConfig" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiAssociationConfig"></a>

```typescript
public readonly sourceApiAssociationConfig: IResolvable | AppsyncSourceApiAssociationSourceApiAssociationConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#source_api_association_config AppsyncSourceApiAssociation#source_api_association_config}.

---

##### `sourceApiId`<sup>Optional</sup> <a name="sourceApiId" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiId"></a>

```typescript
public readonly sourceApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#source_api_id AppsyncSourceApiAssociation#source_api_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppsyncSourceApiAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts">AppsyncSourceApiAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#timeouts AppsyncSourceApiAssociation#timeouts}

---

### AppsyncSourceApiAssociationSourceApiAssociationConfig <a name="AppsyncSourceApiAssociationSourceApiAssociationConfig" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

const appsyncSourceApiAssociationSourceApiAssociationConfig: appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.property.mergeType">mergeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#merge_type AppsyncSourceApiAssociation#merge_type}. |

---

##### `mergeType`<sup>Optional</sup> <a name="mergeType" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#merge_type AppsyncSourceApiAssociation#merge_type}.

---

### AppsyncSourceApiAssociationTimeouts <a name="AppsyncSourceApiAssociationTimeouts" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

const appsyncSourceApiAssociationTimeouts: appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#create AppsyncSourceApiAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#delete AppsyncSourceApiAssociation#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/appsync_source_api_association#update AppsyncSourceApiAssociation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncSourceApiAssociationSourceApiAssociationConfigList <a name="AppsyncSourceApiAssociationSourceApiAssociationConfigList" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

new appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.get"></a>

```typescript
public get(index: number): AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncSourceApiAssociationSourceApiAssociationConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>[]

---


### AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference <a name="AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

new appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resetMergeType">resetMergeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMergeType` <a name="resetMergeType" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resetMergeType"></a>

```typescript
public resetMergeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeTypeInput">mergeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType">mergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mergeTypeInput`<sup>Optional</sup> <a name="mergeTypeInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeTypeInput"></a>

```typescript
public readonly mergeTypeInput: string;
```

- *Type:* string

---

##### `mergeType`<sup>Required</sup> <a name="mergeType" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType"></a>

```typescript
public readonly mergeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncSourceApiAssociationSourceApiAssociationConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---


### AppsyncSourceApiAssociationTimeoutsOutputReference <a name="AppsyncSourceApiAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { appsyncSourceApiAssociation } from '@cdktf/provider-aws'

new appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts">AppsyncSourceApiAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncSourceApiAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appsyncSourceApiAssociation.AppsyncSourceApiAssociationTimeouts">AppsyncSourceApiAssociationTimeouts</a>

---



