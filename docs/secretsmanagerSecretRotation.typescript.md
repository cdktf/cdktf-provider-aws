# `secretsmanagerSecretRotation` Submodule <a name="`secretsmanagerSecretRotation` Submodule" id="@cdktf/provider-aws.secretsmanagerSecretRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretRotation <a name="SecretsmanagerSecretRotation" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer"></a>

```typescript
import { secretsmanagerSecretRotation } from '@cdktf/provider-aws'

new secretsmanagerSecretRotation.SecretsmanagerSecretRotation(scope: Construct, id: string, config: SecretsmanagerSecretRotationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig">SecretsmanagerSecretRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig">SecretsmanagerSecretRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules">putRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotateImmediately">resetRotateImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationLambdaArn">resetRotationLambdaArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRotationRules` <a name="putRotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules"></a>

```typescript
public putRotationRules(value: SecretsmanagerSecretRotationRotationRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRotateImmediately` <a name="resetRotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotateImmediately"></a>

```typescript
public resetRotateImmediately(): void
```

##### `resetRotationLambdaArn` <a name="resetRotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationLambdaArn"></a>

```typescript
public resetRotationLambdaArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsmanagerSecretRotation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct"></a>

```typescript
import { secretsmanagerSecretRotation } from '@cdktf/provider-aws'

secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement"></a>

```typescript
import { secretsmanagerSecretRotation } from '@cdktf/provider-aws'

secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource"></a>

```typescript
import { secretsmanagerSecretRotation } from '@cdktf/provider-aws'

secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport"></a>

```typescript
import { secretsmanagerSecretRotation } from '@cdktf/provider-aws'

secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretsmanagerSecretRotation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsmanagerSecretRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsmanagerSecretRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecretRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabled">rotationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference">SecretsmanagerSecretRotationRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediatelyInput">rotateImmediatelyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArnInput">rotationLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRulesInput">rotationRulesInput</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediately">rotateImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rotationEnabled`<sup>Required</sup> <a name="rotationEnabled" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabled"></a>

```typescript
public readonly rotationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRules"></a>

```typescript
public readonly rotationRules: SecretsmanagerSecretRotationRotationRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference">SecretsmanagerSecretRotationRotationRulesOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rotateImmediatelyInput`<sup>Optional</sup> <a name="rotateImmediatelyInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediatelyInput"></a>

```typescript
public readonly rotateImmediatelyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rotationLambdaArnInput`<sup>Optional</sup> <a name="rotationLambdaArnInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArnInput"></a>

```typescript
public readonly rotationLambdaArnInput: string;
```

- *Type:* string

---

##### `rotationRulesInput`<sup>Optional</sup> <a name="rotationRulesInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRulesInput"></a>

```typescript
public readonly rotationRulesInput: SecretsmanagerSecretRotationRotationRules;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rotateImmediately`<sup>Required</sup> <a name="rotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediately"></a>

```typescript
public readonly rotateImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rotationLambdaArn`<sup>Required</sup> <a name="rotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArn"></a>

```typescript
public readonly rotationLambdaArn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretRotationConfig <a name="SecretsmanagerSecretRotationConfig" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.Initializer"></a>

```typescript
import { secretsmanagerSecretRotation } from '@cdktf/provider-aws'

const secretsmanagerSecretRotationConfig: secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | rotation_rules block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotateImmediately">rotateImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationRules"></a>

```typescript
public readonly rotationRules: SecretsmanagerSecretRotationRotationRules;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

rotation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_rules SecretsmanagerSecretRotation#rotation_rules}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#region SecretsmanagerSecretRotation#region}

---

##### `rotateImmediately`<sup>Optional</sup> <a name="rotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotateImmediately"></a>

```typescript
public readonly rotateImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}.

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="rotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationLambdaArn"></a>

```typescript
public readonly rotationLambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}.

---

### SecretsmanagerSecretRotationRotationRules <a name="SecretsmanagerSecretRotationRotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.Initializer"></a>

```typescript
import { secretsmanagerSecretRotation } from '@cdktf/provider-aws'

const secretsmanagerSecretRotationRotationRules: secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}. |

---

##### `automaticallyAfterDays`<sup>Optional</sup> <a name="automaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.automaticallyAfterDays"></a>

```typescript
public readonly automaticallyAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}.

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretRotationRotationRulesOutputReference <a name="SecretsmanagerSecretRotationRotationRulesOutputReference" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer"></a>

```typescript
import { secretsmanagerSecretRotation } from '@cdktf/provider-aws'

new secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetAutomaticallyAfterDays">resetAutomaticallyAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticallyAfterDays` <a name="resetAutomaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetAutomaticallyAfterDays"></a>

```typescript
public resetAutomaticallyAfterDays(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetScheduleExpression"></a>

```typescript
public resetScheduleExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDaysInput">automaticallyAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticallyAfterDaysInput`<sup>Optional</sup> <a name="automaticallyAfterDaysInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```typescript
public readonly automaticallyAfterDaysInput: number;
```

- *Type:* number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `automaticallyAfterDays`<sup>Required</sup> <a name="automaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```typescript
public readonly automaticallyAfterDays: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretsmanagerSecretRotationRotationRules;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---



