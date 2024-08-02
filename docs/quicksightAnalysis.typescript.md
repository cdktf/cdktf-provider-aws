# `quicksightAnalysis` Submodule <a name="`quicksightAnalysis` Submodule" id="@cdktf/provider-aws.quicksightAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAnalysis <a name="QuicksightAnalysis" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis aws_quicksight_analysis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysis(scope: Construct, id: string, config: QuicksightAnalysisConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig">QuicksightAnalysisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig">QuicksightAnalysisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putSourceEntity">putSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetSourceEntity">resetSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetThemeArn">resetThemeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putParameters"></a>

```typescript
public putParameters(value: QuicksightAnalysisParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | QuicksightAnalysisPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>[]

---

##### `putSourceEntity` <a name="putSourceEntity" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putSourceEntity"></a>

```typescript
public putSourceEntity(value: QuicksightAnalysisSourceEntity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putTimeouts"></a>

```typescript
public putTimeouts(value: QuicksightAnalysisTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetDefinition` <a name="resetDefinition" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetDefinition"></a>

```typescript
public resetDefinition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetRecoveryWindowInDays"></a>

```typescript
public resetRecoveryWindowInDays(): void
```

##### `resetSourceEntity` <a name="resetSourceEntity" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetSourceEntity"></a>

```typescript
public resetSourceEntity(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetThemeArn` <a name="resetThemeArn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetThemeArn"></a>

```typescript
public resetThemeArn(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightAnalysis resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.isConstruct"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

quicksightAnalysis.QuicksightAnalysis.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformElement"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

quicksightAnalysis.QuicksightAnalysis.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformResource"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

quicksightAnalysis.QuicksightAnalysis.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

quicksightAnalysis.QuicksightAnalysis.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QuicksightAnalysis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightAnalysis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.definitionInput">definitionInput</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lastPublishedTime">lastPublishedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference">QuicksightAnalysisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList">QuicksightAnalysisPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference">QuicksightAnalysisSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference">QuicksightAnalysisTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.analysisIdInput">analysisIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.permissionsInput">permissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.sourceEntityInput">sourceEntityInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.themeArnInput">themeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.analysisId">analysisId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.definition">definition</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.themeArn">themeArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Required</sup> <a name="definitionInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.definitionInput"></a>

```typescript
public readonly definitionInput: any;
```

- *Type:* any

---

##### `lastPublishedTime`<sup>Required</sup> <a name="lastPublishedTime" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lastPublishedTime"></a>

```typescript
public readonly lastPublishedTime: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.parameters"></a>

```typescript
public readonly parameters: QuicksightAnalysisParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference">QuicksightAnalysisParametersOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.permissions"></a>

```typescript
public readonly permissions: QuicksightAnalysisPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList">QuicksightAnalysisPermissionsList</a>

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.sourceEntity"></a>

```typescript
public readonly sourceEntity: QuicksightAnalysisSourceEntityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference">QuicksightAnalysisSourceEntityOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.timeouts"></a>

```typescript
public readonly timeouts: QuicksightAnalysisTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference">QuicksightAnalysisTimeoutsOutputReference</a>

---

##### `analysisIdInput`<sup>Optional</sup> <a name="analysisIdInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.analysisIdInput"></a>

```typescript
public readonly analysisIdInput: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.parametersInput"></a>

```typescript
public readonly parametersInput: QuicksightAnalysisParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | QuicksightAnalysisPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>[]

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.recoveryWindowInDaysInput"></a>

```typescript
public readonly recoveryWindowInDaysInput: number;
```

- *Type:* number

---

##### `sourceEntityInput`<sup>Optional</sup> <a name="sourceEntityInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.sourceEntityInput"></a>

```typescript
public readonly sourceEntityInput: QuicksightAnalysisSourceEntity;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `themeArnInput`<sup>Optional</sup> <a name="themeArnInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.themeArnInput"></a>

```typescript
public readonly themeArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | QuicksightAnalysisTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a>

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.analysisId"></a>

```typescript
public readonly analysisId: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.definition"></a>

```typescript
public readonly definition: any;
```

- *Type:* any

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `themeArn`<sup>Required</sup> <a name="themeArn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.themeArn"></a>

```typescript
public readonly themeArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysis.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAnalysisConfig <a name="QuicksightAnalysisConfig" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisConfig: quicksightAnalysis.QuicksightAnalysisConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.analysisId">analysisId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.definition">definition</a></code> | <code>any</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#id QuicksightAnalysis#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.permissions">permissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>[]</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#recovery_window_in_days QuicksightAnalysis#recovery_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#tags_all QuicksightAnalysis#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.themeArn">themeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.analysisId"></a>

```typescript
public readonly analysisId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.definition"></a>

```typescript
public readonly definition: any;
```

- *Type:* any

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#definition QuicksightAnalysis#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#id QuicksightAnalysis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.parameters"></a>

```typescript
public readonly parameters: QuicksightAnalysisParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#parameters QuicksightAnalysis#parameters}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | QuicksightAnalysisPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>[]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#permissions QuicksightAnalysis#permissions}

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#recovery_window_in_days QuicksightAnalysis#recovery_window_in_days}.

---

##### `sourceEntity`<sup>Optional</sup> <a name="sourceEntity" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.sourceEntity"></a>

```typescript
public readonly sourceEntity: QuicksightAnalysisSourceEntity;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#source_entity QuicksightAnalysis#source_entity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#tags_all QuicksightAnalysis#tags_all}.

---

##### `themeArn`<sup>Optional</sup> <a name="themeArn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.themeArn"></a>

```typescript
public readonly themeArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisConfig.property.timeouts"></a>

```typescript
public readonly timeouts: QuicksightAnalysisTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#timeouts QuicksightAnalysis#timeouts}

---

### QuicksightAnalysisParameters <a name="QuicksightAnalysisParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisParameters: quicksightAnalysis.QuicksightAnalysisParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.dateTimeParameters">dateTimeParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>[]</code> | date_time_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.decimalParameters">decimalParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>[]</code> | decimal_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.integerParameters">integerParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>[]</code> | integer_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.stringParameters">stringParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>[]</code> | string_parameters block. |

---

##### `dateTimeParameters`<sup>Optional</sup> <a name="dateTimeParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.dateTimeParameters"></a>

```typescript
public readonly dateTimeParameters: IResolvable | QuicksightAnalysisParametersDateTimeParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>[]

date_time_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#date_time_parameters QuicksightAnalysis#date_time_parameters}

---

##### `decimalParameters`<sup>Optional</sup> <a name="decimalParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.decimalParameters"></a>

```typescript
public readonly decimalParameters: IResolvable | QuicksightAnalysisParametersDecimalParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>[]

decimal_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#decimal_parameters QuicksightAnalysis#decimal_parameters}

---

##### `integerParameters`<sup>Optional</sup> <a name="integerParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.integerParameters"></a>

```typescript
public readonly integerParameters: IResolvable | QuicksightAnalysisParametersIntegerParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>[]

integer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#integer_parameters QuicksightAnalysis#integer_parameters}

---

##### `stringParameters`<sup>Optional</sup> <a name="stringParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters.property.stringParameters"></a>

```typescript
public readonly stringParameters: IResolvable | QuicksightAnalysisParametersStringParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>[]

string_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#string_parameters QuicksightAnalysis#string_parameters}

---

### QuicksightAnalysisParametersDateTimeParameters <a name="QuicksightAnalysisParametersDateTimeParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisParametersDateTimeParameters: quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}.

---

### QuicksightAnalysisParametersDecimalParameters <a name="QuicksightAnalysisParametersDecimalParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisParametersDecimalParameters: quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.values">values</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}.

---

### QuicksightAnalysisParametersIntegerParameters <a name="QuicksightAnalysisParametersIntegerParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisParametersIntegerParameters: quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.values">values</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}.

---

### QuicksightAnalysisParametersStringParameters <a name="QuicksightAnalysisParametersStringParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisParametersStringParameters: quicksightAnalysis.QuicksightAnalysisParametersStringParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}.

---

### QuicksightAnalysisPermissions <a name="QuicksightAnalysisPermissions" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisPermissions: quicksightAnalysis.QuicksightAnalysisPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.property.actions">actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#actions QuicksightAnalysis#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#principal QuicksightAnalysis#principal}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#actions QuicksightAnalysis#actions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#principal QuicksightAnalysis#principal}.

---

### QuicksightAnalysisSourceEntity <a name="QuicksightAnalysisSourceEntity" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisSourceEntity: quicksightAnalysis.QuicksightAnalysisSourceEntity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | source_template block. |

---

##### `sourceTemplate`<sup>Optional</sup> <a name="sourceTemplate" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity.property.sourceTemplate"></a>

```typescript
public readonly sourceTemplate: QuicksightAnalysisSourceEntitySourceTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

source_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#source_template QuicksightAnalysis#source_template}

---

### QuicksightAnalysisSourceEntitySourceTemplate <a name="QuicksightAnalysisSourceEntitySourceTemplate" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisSourceEntitySourceTemplate: quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#arn QuicksightAnalysis#arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.dataSetReferences">dataSetReferences</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>[]</code> | data_set_references block. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#arn QuicksightAnalysis#arn}.

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.dataSetReferences"></a>

```typescript
public readonly dataSetReferences: IResolvable | QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>[]

data_set_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#data_set_references QuicksightAnalysis#data_set_references}

---

### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisSourceEntitySourceTemplateDataSetReferences: quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#data_set_arn QuicksightAnalysis#data_set_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#data_set_placeholder QuicksightAnalysis#data_set_placeholder}. |

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#data_set_arn QuicksightAnalysis#data_set_arn}.

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder"></a>

```typescript
public readonly dataSetPlaceholder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#data_set_placeholder QuicksightAnalysis#data_set_placeholder}.

---

### QuicksightAnalysisTimeouts <a name="QuicksightAnalysisTimeouts" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

const quicksightAnalysisTimeouts: quicksightAnalysis.QuicksightAnalysisTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#create QuicksightAnalysis#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#delete QuicksightAnalysis#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#update QuicksightAnalysis#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#create QuicksightAnalysis#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#delete QuicksightAnalysis#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/quicksight_analysis#update QuicksightAnalysis#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAnalysisParametersDateTimeParametersList <a name="QuicksightAnalysisParametersDateTimeParametersList" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get"></a>

```typescript
public get(index: number): QuicksightAnalysisParametersDateTimeParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisParametersDateTimeParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>[]

---


### QuicksightAnalysisParametersDateTimeParametersOutputReference <a name="QuicksightAnalysisParametersDateTimeParametersOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisParametersDateTimeParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>

---


### QuicksightAnalysisParametersDecimalParametersList <a name="QuicksightAnalysisParametersDecimalParametersList" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get"></a>

```typescript
public get(index: number): QuicksightAnalysisParametersDecimalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisParametersDecimalParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>[]

---


### QuicksightAnalysisParametersDecimalParametersOutputReference <a name="QuicksightAnalysisParametersDecimalParametersOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: number[];
```

- *Type:* number[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisParametersDecimalParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>

---


### QuicksightAnalysisParametersIntegerParametersList <a name="QuicksightAnalysisParametersIntegerParametersList" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get"></a>

```typescript
public get(index: number): QuicksightAnalysisParametersIntegerParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisParametersIntegerParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>[]

---


### QuicksightAnalysisParametersIntegerParametersOutputReference <a name="QuicksightAnalysisParametersIntegerParametersOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: number[];
```

- *Type:* number[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisParametersIntegerParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>

---


### QuicksightAnalysisParametersOutputReference <a name="QuicksightAnalysisParametersOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters">putDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters">putDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters">putIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters">putStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDateTimeParameters">resetDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDecimalParameters">resetDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetIntegerParameters">resetIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetStringParameters">resetStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateTimeParameters` <a name="putDateTimeParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters"></a>

```typescript
public putDateTimeParameters(value: IResolvable | QuicksightAnalysisParametersDateTimeParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>[]

---

##### `putDecimalParameters` <a name="putDecimalParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters"></a>

```typescript
public putDecimalParameters(value: IResolvable | QuicksightAnalysisParametersDecimalParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>[]

---

##### `putIntegerParameters` <a name="putIntegerParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters"></a>

```typescript
public putIntegerParameters(value: IResolvable | QuicksightAnalysisParametersIntegerParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>[]

---

##### `putStringParameters` <a name="putStringParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters"></a>

```typescript
public putStringParameters(value: IResolvable | QuicksightAnalysisParametersStringParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>[]

---

##### `resetDateTimeParameters` <a name="resetDateTimeParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDateTimeParameters"></a>

```typescript
public resetDateTimeParameters(): void
```

##### `resetDecimalParameters` <a name="resetDecimalParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDecimalParameters"></a>

```typescript
public resetDecimalParameters(): void
```

##### `resetIntegerParameters` <a name="resetIntegerParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetIntegerParameters"></a>

```typescript
public resetIntegerParameters(): void
```

##### `resetStringParameters` <a name="resetStringParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetStringParameters"></a>

```typescript
public resetStringParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParameters">dateTimeParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList">QuicksightAnalysisParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParameters">decimalParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList">QuicksightAnalysisParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParameters">integerParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList">QuicksightAnalysisParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParameters">stringParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList">QuicksightAnalysisParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParametersInput">dateTimeParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParametersInput">decimalParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParametersInput">integerParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParametersInput">stringParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateTimeParameters`<sup>Required</sup> <a name="dateTimeParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParameters"></a>

```typescript
public readonly dateTimeParameters: QuicksightAnalysisParametersDateTimeParametersList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList">QuicksightAnalysisParametersDateTimeParametersList</a>

---

##### `decimalParameters`<sup>Required</sup> <a name="decimalParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParameters"></a>

```typescript
public readonly decimalParameters: QuicksightAnalysisParametersDecimalParametersList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList">QuicksightAnalysisParametersDecimalParametersList</a>

---

##### `integerParameters`<sup>Required</sup> <a name="integerParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParameters"></a>

```typescript
public readonly integerParameters: QuicksightAnalysisParametersIntegerParametersList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList">QuicksightAnalysisParametersIntegerParametersList</a>

---

##### `stringParameters`<sup>Required</sup> <a name="stringParameters" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParameters"></a>

```typescript
public readonly stringParameters: QuicksightAnalysisParametersStringParametersList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList">QuicksightAnalysisParametersStringParametersList</a>

---

##### `dateTimeParametersInput`<sup>Optional</sup> <a name="dateTimeParametersInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParametersInput"></a>

```typescript
public readonly dateTimeParametersInput: IResolvable | QuicksightAnalysisParametersDateTimeParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters">QuicksightAnalysisParametersDateTimeParameters</a>[]

---

##### `decimalParametersInput`<sup>Optional</sup> <a name="decimalParametersInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParametersInput"></a>

```typescript
public readonly decimalParametersInput: IResolvable | QuicksightAnalysisParametersDecimalParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters">QuicksightAnalysisParametersDecimalParameters</a>[]

---

##### `integerParametersInput`<sup>Optional</sup> <a name="integerParametersInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParametersInput"></a>

```typescript
public readonly integerParametersInput: IResolvable | QuicksightAnalysisParametersIntegerParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters">QuicksightAnalysisParametersIntegerParameters</a>[]

---

##### `stringParametersInput`<sup>Optional</sup> <a name="stringParametersInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParametersInput"></a>

```typescript
public readonly stringParametersInput: IResolvable | QuicksightAnalysisParametersStringParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightAnalysisParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---


### QuicksightAnalysisParametersStringParametersList <a name="QuicksightAnalysisParametersStringParametersList" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisParametersStringParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get"></a>

```typescript
public get(index: number): QuicksightAnalysisParametersStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisParametersStringParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>[]

---


### QuicksightAnalysisParametersStringParametersOutputReference <a name="QuicksightAnalysisParametersStringParametersOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisParametersStringParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisParametersStringParameters">QuicksightAnalysisParametersStringParameters</a>

---


### QuicksightAnalysisPermissionsList <a name="QuicksightAnalysisPermissionsList" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.get"></a>

```typescript
public get(index: number): QuicksightAnalysisPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>[]

---


### QuicksightAnalysisPermissionsOutputReference <a name="QuicksightAnalysisPermissionsOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisPermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisPermissions">QuicksightAnalysisPermissions</a>

---


### QuicksightAnalysisSourceEntityOutputReference <a name="QuicksightAnalysisSourceEntityOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate">putSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resetSourceTemplate">resetSourceTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceTemplate` <a name="putSourceTemplate" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate"></a>

```typescript
public putSourceTemplate(value: QuicksightAnalysisSourceEntitySourceTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---

##### `resetSourceTemplate` <a name="resetSourceTemplate" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resetSourceTemplate"></a>

```typescript
public resetSourceTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference">QuicksightAnalysisSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplateInput">sourceTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceTemplate`<sup>Required</sup> <a name="sourceTemplate" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate"></a>

```typescript
public readonly sourceTemplate: QuicksightAnalysisSourceEntitySourceTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference">QuicksightAnalysisSourceEntitySourceTemplateOutputReference</a>

---

##### `sourceTemplateInput`<sup>Optional</sup> <a name="sourceTemplateInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplateInput"></a>

```typescript
public readonly sourceTemplateInput: QuicksightAnalysisSourceEntitySourceTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightAnalysisSourceEntity;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---


### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```typescript
public get(index: number): QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>[]

---


### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput">dataSetPlaceholderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```typescript
public readonly dataSetArnInput: string;
```

- *Type:* string

---

##### `dataSetPlaceholderInput`<sup>Optional</sup> <a name="dataSetPlaceholderInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```typescript
public readonly dataSetPlaceholderInput: string;
```

- *Type:* string

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```typescript
public readonly dataSetPlaceholder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>

---


### QuicksightAnalysisSourceEntitySourceTemplateOutputReference <a name="QuicksightAnalysisSourceEntitySourceTemplateOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences">putDataSetReferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSetReferences` <a name="putDataSetReferences" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences"></a>

```typescript
public putDataSetReferences(value: IResolvable | QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences">dataSetReferences</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput">dataSetReferencesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```typescript
public readonly dataSetReferences: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `dataSetReferencesInput`<sup>Optional</sup> <a name="dataSetReferencesInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput"></a>

```typescript
public readonly dataSetReferencesInput: IResolvable | QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightAnalysisSourceEntitySourceTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---


### QuicksightAnalysisTimeoutsOutputReference <a name="QuicksightAnalysisTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer"></a>

```typescript
import { quicksightAnalysis } from '@cdktf/provider-aws'

new quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAnalysisTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAnalysis.QuicksightAnalysisTimeouts">QuicksightAnalysisTimeouts</a>

---



