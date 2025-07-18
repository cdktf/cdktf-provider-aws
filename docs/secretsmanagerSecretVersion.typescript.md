# `secretsmanagerSecretVersion` Submodule <a name="`secretsmanagerSecretVersion` Submodule" id="@cdktf/provider-aws.secretsmanagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretVersion <a name="SecretsmanagerSecretVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version aws_secretsmanager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer"></a>

```typescript
import { secretsmanagerSecretVersion } from '@cdktf/provider-aws'

new secretsmanagerSecretVersion.SecretsmanagerSecretVersion(scope: Construct, id: string, config: SecretsmanagerSecretVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig">SecretsmanagerSecretVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig">SecretsmanagerSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretBinary">resetSecretBinary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretString">resetSecretString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWo">resetSecretStringWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWoVersion">resetSecretStringWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetVersionStages">resetVersionStages</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretBinary` <a name="resetSecretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretBinary"></a>

```typescript
public resetSecretBinary(): void
```

##### `resetSecretString` <a name="resetSecretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretString"></a>

```typescript
public resetSecretString(): void
```

##### `resetSecretStringWo` <a name="resetSecretStringWo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWo"></a>

```typescript
public resetSecretStringWo(): void
```

##### `resetSecretStringWoVersion` <a name="resetSecretStringWoVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWoVersion"></a>

```typescript
public resetSecretStringWoVersion(): void
```

##### `resetVersionStages` <a name="resetVersionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetVersionStages"></a>

```typescript
public resetVersionStages(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct"></a>

```typescript
import { secretsmanagerSecretVersion } from '@cdktf/provider-aws'

secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement"></a>

```typescript
import { secretsmanagerSecretVersion } from '@cdktf/provider-aws'

secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource"></a>

```typescript
import { secretsmanagerSecretVersion } from '@cdktf/provider-aws'

secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport"></a>

```typescript
import { secretsmanagerSecretVersion } from '@cdktf/provider-aws'

secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsmanagerSecretVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsmanagerSecretVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecretVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.hasSecretStringWo">hasSecretStringWo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinaryInput">secretBinaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringInput">secretStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoInput">secretStringWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersionInput">secretStringWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStagesInput">versionStagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinary">secretBinary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretString">secretString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWo">secretStringWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersion">secretStringWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStages">versionStages</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `hasSecretStringWo`<sup>Required</sup> <a name="hasSecretStringWo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.hasSecretStringWo"></a>

```typescript
public readonly hasSecretStringWo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretBinaryInput`<sup>Optional</sup> <a name="secretBinaryInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinaryInput"></a>

```typescript
public readonly secretBinaryInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `secretStringInput`<sup>Optional</sup> <a name="secretStringInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringInput"></a>

```typescript
public readonly secretStringInput: string;
```

- *Type:* string

---

##### `secretStringWoInput`<sup>Optional</sup> <a name="secretStringWoInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoInput"></a>

```typescript
public readonly secretStringWoInput: string;
```

- *Type:* string

---

##### `secretStringWoVersionInput`<sup>Optional</sup> <a name="secretStringWoVersionInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersionInput"></a>

```typescript
public readonly secretStringWoVersionInput: number;
```

- *Type:* number

---

##### `versionStagesInput`<sup>Optional</sup> <a name="versionStagesInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStagesInput"></a>

```typescript
public readonly versionStagesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretBinary`<sup>Required</sup> <a name="secretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinary"></a>

```typescript
public readonly secretBinary: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `secretString`<sup>Required</sup> <a name="secretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretString"></a>

```typescript
public readonly secretString: string;
```

- *Type:* string

---

##### `secretStringWo`<sup>Required</sup> <a name="secretStringWo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWo"></a>

```typescript
public readonly secretStringWo: string;
```

- *Type:* string

---

##### `secretStringWoVersion`<sup>Required</sup> <a name="secretStringWoVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersion"></a>

```typescript
public readonly secretStringWoVersion: number;
```

- *Type:* number

---

##### `versionStages`<sup>Required</sup> <a name="versionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStages"></a>

```typescript
public readonly versionStages: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretVersionConfig <a name="SecretsmanagerSecretVersionConfig" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.Initializer"></a>

```typescript
import { secretsmanagerSecretVersion } from '@cdktf/provider-aws'

const secretsmanagerSecretVersionConfig: secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretBinary">secretBinary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretString">secretString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWo">secretStringWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWoVersion">secretStringWoVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.versionStages">versionStages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#region SecretsmanagerSecretVersion#region}

---

##### `secretBinary`<sup>Optional</sup> <a name="secretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretBinary"></a>

```typescript
public readonly secretBinary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}.

---

##### `secretString`<sup>Optional</sup> <a name="secretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretString"></a>

```typescript
public readonly secretString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}.

---

##### `secretStringWo`<sup>Optional</sup> <a name="secretStringWo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWo"></a>

```typescript
public readonly secretStringWo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}.

---

##### `secretStringWoVersion`<sup>Optional</sup> <a name="secretStringWoVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWoVersion"></a>

```typescript
public readonly secretStringWoVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}.

---

##### `versionStages`<sup>Optional</sup> <a name="versionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.versionStages"></a>

```typescript
public readonly versionStages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}.

---



