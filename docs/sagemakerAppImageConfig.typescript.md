# `sagemakerAppImageConfig` Submodule <a name="`sagemakerAppImageConfig` Submodule" id="@cdktf/provider-aws.sagemakerAppImageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAppImageConfig <a name="SagemakerAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfig(scope: Construct, id: string, config: SagemakerAppImageConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig">SagemakerAppImageConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig">SagemakerAppImageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putCodeEditorAppImageConfig">putCodeEditorAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putJupyterLabImageConfig">putJupyterLabImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putKernelGatewayImageConfig">putKernelGatewayImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetCodeEditorAppImageConfig">resetCodeEditorAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetJupyterLabImageConfig">resetJupyterLabImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetKernelGatewayImageConfig">resetKernelGatewayImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeEditorAppImageConfig` <a name="putCodeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putCodeEditorAppImageConfig"></a>

```typescript
public putCodeEditorAppImageConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putCodeEditorAppImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

---

##### `putJupyterLabImageConfig` <a name="putJupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putJupyterLabImageConfig"></a>

```typescript
public putJupyterLabImageConfig(value: SagemakerAppImageConfigJupyterLabImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putJupyterLabImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a>

---

##### `putKernelGatewayImageConfig` <a name="putKernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putKernelGatewayImageConfig"></a>

```typescript
public putKernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.putKernelGatewayImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

---

##### `resetCodeEditorAppImageConfig` <a name="resetCodeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetCodeEditorAppImageConfig"></a>

```typescript
public resetCodeEditorAppImageConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJupyterLabImageConfig` <a name="resetJupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetJupyterLabImageConfig"></a>

```typescript
public resetJupyterLabImageConfig(): void
```

##### `resetKernelGatewayImageConfig` <a name="resetKernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetKernelGatewayImageConfig"></a>

```typescript
public resetKernelGatewayImageConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerAppImageConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SagemakerAppImageConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerAppImageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerAppImageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerAppImageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfig">codeEditorAppImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabImageConfig">jupyterLabImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfig">kernelGatewayImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfigInput">codeEditorAppImageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabImageConfigInput">jupyterLabImageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfigInput">kernelGatewayImageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `codeEditorAppImageConfig`<sup>Required</sup> <a name="codeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfig"></a>

```typescript
public readonly codeEditorAppImageConfig: SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a>

---

##### `jupyterLabImageConfig`<sup>Required</sup> <a name="jupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabImageConfig"></a>

```typescript
public readonly jupyterLabImageConfig: SagemakerAppImageConfigJupyterLabImageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigOutputReference</a>

---

##### `kernelGatewayImageConfig`<sup>Required</sup> <a name="kernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfig"></a>

```typescript
public readonly kernelGatewayImageConfig: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a>

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigNameInput"></a>

```typescript
public readonly appImageConfigNameInput: string;
```

- *Type:* string

---

##### `codeEditorAppImageConfigInput`<sup>Optional</sup> <a name="codeEditorAppImageConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfigInput"></a>

```typescript
public readonly codeEditorAppImageConfigInput: SagemakerAppImageConfigCodeEditorAppImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jupyterLabImageConfigInput`<sup>Optional</sup> <a name="jupyterLabImageConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabImageConfigInput"></a>

```typescript
public readonly jupyterLabImageConfigInput: SagemakerAppImageConfigJupyterLabImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a>

---

##### `kernelGatewayImageConfigInput`<sup>Optional</sup> <a name="kernelGatewayImageConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfigInput"></a>

```typescript
public readonly kernelGatewayImageConfigInput: SagemakerAppImageConfigKernelGatewayImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAppImageConfigCodeEditorAppImageConfig <a name="SagemakerAppImageConfigCodeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigCodeEditorAppImageConfig: sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | container_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a></code> | file_system_config block. |

---

##### `containerConfig`<sup>Optional</sup> <a name="containerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.containerConfig"></a>

```typescript
public readonly containerConfig: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}

---

### SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig <a name="SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig: sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}. |

---

##### `containerArguments`<sup>Optional</sup> <a name="containerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}.

---

##### `containerEntrypoint`<sup>Optional</sup> <a name="containerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}.

---

##### `containerEnvironmentVariables`<sup>Optional</sup> <a name="containerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEnvironmentVariables"></a>

```typescript
public readonly containerEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}.

---

### SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig <a name="SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig: sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.defaultGid">defaultGid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.defaultUid">defaultUid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}. |

---

##### `defaultGid`<sup>Optional</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.defaultGid"></a>

```typescript
public readonly defaultGid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}.

---

##### `defaultUid`<sup>Optional</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.defaultUid"></a>

```typescript
public readonly defaultUid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}.

---

### SagemakerAppImageConfigConfig <a name="SagemakerAppImageConfigConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigConfig: sagemakerAppImageConfig.SagemakerAppImageConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.codeEditorAppImageConfig">codeEditorAppImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | code_editor_app_image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#id SagemakerAppImageConfig#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.jupyterLabImageConfig">jupyterLabImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a></code> | jupyter_lab_image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.kernelGatewayImageConfig">kernelGatewayImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | kernel_gateway_image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#tags_all SagemakerAppImageConfig#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}.

---

##### `codeEditorAppImageConfig`<sup>Optional</sup> <a name="codeEditorAppImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.codeEditorAppImageConfig"></a>

```typescript
public readonly codeEditorAppImageConfig: SagemakerAppImageConfigCodeEditorAppImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

code_editor_app_image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#code_editor_app_image_config SagemakerAppImageConfig#code_editor_app_image_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#id SagemakerAppImageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyterLabImageConfig`<sup>Optional</sup> <a name="jupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.jupyterLabImageConfig"></a>

```typescript
public readonly jupyterLabImageConfig: SagemakerAppImageConfigJupyterLabImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a>

jupyter_lab_image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#jupyter_lab_image_config SagemakerAppImageConfig#jupyter_lab_image_config}

---

##### `kernelGatewayImageConfig`<sup>Optional</sup> <a name="kernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.kernelGatewayImageConfig"></a>

```typescript
public readonly kernelGatewayImageConfig: SagemakerAppImageConfigKernelGatewayImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

kernel_gateway_image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#tags_all SagemakerAppImageConfig#tags_all}.

---

### SagemakerAppImageConfigJupyterLabImageConfig <a name="SagemakerAppImageConfigJupyterLabImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigJupyterLabImageConfig: sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a></code> | container_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a></code> | file_system_config block. |

---

##### `containerConfig`<sup>Optional</sup> <a name="containerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.property.containerConfig"></a>

```typescript
public readonly containerConfig: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}

---

### SagemakerAppImageConfigJupyterLabImageConfigContainerConfig <a name="SagemakerAppImageConfigJupyterLabImageConfigContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigJupyterLabImageConfigContainerConfig: sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}. |

---

##### `containerArguments`<sup>Optional</sup> <a name="containerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}.

---

##### `containerEntrypoint`<sup>Optional</sup> <a name="containerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}.

---

##### `containerEnvironmentVariables`<sup>Optional</sup> <a name="containerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig.property.containerEnvironmentVariables"></a>

```typescript
public readonly containerEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}.

---

### SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig <a name="SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig: sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.defaultGid">defaultGid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.defaultUid">defaultUid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}. |

---

##### `defaultGid`<sup>Optional</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.defaultGid"></a>

```typescript
public readonly defaultGid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}.

---

##### `defaultUid`<sup>Optional</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.defaultUid"></a>

```typescript
public readonly defaultUid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}.

---

### SagemakerAppImageConfigKernelGatewayImageConfig <a name="SagemakerAppImageConfigKernelGatewayImageConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigKernelGatewayImageConfig: sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.kernelSpec">kernelSpec</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>[]</code> | kernel_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | file_system_config block. |

---

##### `kernelSpec`<sup>Required</sup> <a name="kernelSpec" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.kernelSpec"></a>

```typescript
public readonly kernelSpec: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>[]

kernel_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#kernel_spec SagemakerAppImageConfig#kernel_spec}

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}

---

### SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig <a name="SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig: sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultGid">defaultGid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultUid">defaultUid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}. |

---

##### `defaultGid`<sup>Optional</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultGid"></a>

```typescript
public readonly defaultGid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}.

---

##### `defaultUid`<sup>Optional</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultUid"></a>

```typescript
public readonly defaultUid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}.

---

### SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec <a name="SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

const sagemakerAppImageConfigKernelGatewayImageConfigKernelSpec: sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#name SagemakerAppImageConfig#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#display_name SagemakerAppImageConfig#display_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#name SagemakerAppImageConfig#name}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_app_image_config#display_name SagemakerAppImageConfig#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference <a name="SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerArguments">resetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEntrypoint">resetContainerEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables">resetContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerArguments` <a name="resetContainerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerArguments"></a>

```typescript
public resetContainerArguments(): void
```

##### `resetContainerEntrypoint` <a name="resetContainerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEntrypoint"></a>

```typescript
public resetContainerEntrypoint(): void
```

##### `resetContainerEnvironmentVariables` <a name="resetContainerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables"></a>

```typescript
public resetContainerEnvironmentVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArgumentsInput">containerArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypointInput">containerEntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput">containerEnvironmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerArgumentsInput`<sup>Optional</sup> <a name="containerArgumentsInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArgumentsInput"></a>

```typescript
public readonly containerArgumentsInput: string[];
```

- *Type:* string[]

---

##### `containerEntrypointInput`<sup>Optional</sup> <a name="containerEntrypointInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypointInput"></a>

```typescript
public readonly containerEntrypointInput: string[];
```

- *Type:* string[]

---

##### `containerEnvironmentVariablesInput`<sup>Optional</sup> <a name="containerEnvironmentVariablesInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput"></a>

```typescript
public readonly containerEnvironmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `containerArguments`<sup>Required</sup> <a name="containerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

---

##### `containerEntrypoint`<sup>Required</sup> <a name="containerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

---

##### `containerEnvironmentVariables`<sup>Required</sup> <a name="containerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```typescript
public readonly containerEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---


### SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference <a name="SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetDefaultGid">resetDefaultGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetDefaultUid">resetDefaultUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGid` <a name="resetDefaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetDefaultGid"></a>

```typescript
public resetDefaultGid(): void
```

##### `resetDefaultUid` <a name="resetDefaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetDefaultUid"></a>

```typescript
public resetDefaultUid(): void
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultGidInput">defaultGidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultUidInput">defaultUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultGid">defaultGid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultUid">defaultUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultGidInput`<sup>Optional</sup> <a name="defaultGidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultGidInput"></a>

```typescript
public readonly defaultGidInput: number;
```

- *Type:* number

---

##### `defaultUidInput`<sup>Optional</sup> <a name="defaultUidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultUidInput"></a>

```typescript
public readonly defaultUidInput: number;
```

- *Type:* number

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `defaultGid`<sup>Required</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```typescript
public readonly defaultGid: number;
```

- *Type:* number

---

##### `defaultUid`<sup>Required</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```typescript
public readonly defaultUid: number;
```

- *Type:* number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a>

---


### SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference <a name="SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putContainerConfig">putContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putFileSystemConfig">putFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetContainerConfig">resetContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetFileSystemConfig">resetFileSystemConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerConfig` <a name="putContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putContainerConfig"></a>

```typescript
public putContainerConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---

##### `putFileSystemConfig` <a name="putFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putFileSystemConfig"></a>

```typescript
public putFileSystemConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a>

---

##### `resetContainerConfig` <a name="resetContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetContainerConfig"></a>

```typescript
public resetContainerConfig(): void
```

##### `resetFileSystemConfig` <a name="resetFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetFileSystemConfig"></a>

```typescript
public resetFileSystemConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfigInput">containerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fileSystemConfigInput">fileSystemConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerConfig`<sup>Required</sup> <a name="containerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig"></a>

```typescript
public readonly containerConfig: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a>

---

##### `fileSystemConfig`<sup>Required</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference</a>

---

##### `containerConfigInput`<sup>Optional</sup> <a name="containerConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfigInput"></a>

```typescript
public readonly containerConfigInput: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---

##### `fileSystemConfigInput`<sup>Optional</sup> <a name="fileSystemConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fileSystemConfigInput"></a>

```typescript
public readonly fileSystemConfigInput: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig">SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerAppImageConfigCodeEditorAppImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

---


### SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference <a name="SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerArguments">resetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerEntrypoint">resetContainerEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables">resetContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerArguments` <a name="resetContainerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerArguments"></a>

```typescript
public resetContainerArguments(): void
```

##### `resetContainerEntrypoint` <a name="resetContainerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerEntrypoint"></a>

```typescript
public resetContainerEntrypoint(): void
```

##### `resetContainerEnvironmentVariables` <a name="resetContainerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables"></a>

```typescript
public resetContainerEnvironmentVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerArgumentsInput">containerArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEntrypointInput">containerEntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput">containerEnvironmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerArgumentsInput`<sup>Optional</sup> <a name="containerArgumentsInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerArgumentsInput"></a>

```typescript
public readonly containerArgumentsInput: string[];
```

- *Type:* string[]

---

##### `containerEntrypointInput`<sup>Optional</sup> <a name="containerEntrypointInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEntrypointInput"></a>

```typescript
public readonly containerEntrypointInput: string[];
```

- *Type:* string[]

---

##### `containerEnvironmentVariablesInput`<sup>Optional</sup> <a name="containerEnvironmentVariablesInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput"></a>

```typescript
public readonly containerEnvironmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `containerArguments`<sup>Required</sup> <a name="containerArguments" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

---

##### `containerEntrypoint`<sup>Required</sup> <a name="containerEntrypoint" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

---

##### `containerEnvironmentVariables`<sup>Required</sup> <a name="containerEnvironmentVariables" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```typescript
public readonly containerEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a>

---


### SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference <a name="SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetDefaultGid">resetDefaultGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetDefaultUid">resetDefaultUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGid` <a name="resetDefaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetDefaultGid"></a>

```typescript
public resetDefaultGid(): void
```

##### `resetDefaultUid` <a name="resetDefaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetDefaultUid"></a>

```typescript
public resetDefaultUid(): void
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultGidInput">defaultGidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultUidInput">defaultUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultGid">defaultGid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultUid">defaultUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultGidInput`<sup>Optional</sup> <a name="defaultGidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultGidInput"></a>

```typescript
public readonly defaultGidInput: number;
```

- *Type:* number

---

##### `defaultUidInput`<sup>Optional</sup> <a name="defaultUidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultUidInput"></a>

```typescript
public readonly defaultUidInput: number;
```

- *Type:* number

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `defaultGid`<sup>Required</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```typescript
public readonly defaultGid: number;
```

- *Type:* number

---

##### `defaultUid`<sup>Required</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```typescript
public readonly defaultUid: number;
```

- *Type:* number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a>

---


### SagemakerAppImageConfigJupyterLabImageConfigOutputReference <a name="SagemakerAppImageConfigJupyterLabImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putContainerConfig">putContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putFileSystemConfig">putFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resetContainerConfig">resetContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resetFileSystemConfig">resetFileSystemConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerConfig` <a name="putContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putContainerConfig"></a>

```typescript
public putContainerConfig(value: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a>

---

##### `putFileSystemConfig` <a name="putFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putFileSystemConfig"></a>

```typescript
public putFileSystemConfig(value: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a>

---

##### `resetContainerConfig` <a name="resetContainerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resetContainerConfig"></a>

```typescript
public resetContainerConfig(): void
```

##### `resetFileSystemConfig` <a name="resetFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.resetFileSystemConfig"></a>

```typescript
public resetFileSystemConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.containerConfigInput">containerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fileSystemConfigInput">fileSystemConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerConfig`<sup>Required</sup> <a name="containerConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.containerConfig"></a>

```typescript
public readonly containerConfig: SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference</a>

---

##### `fileSystemConfig`<sup>Required</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference</a>

---

##### `containerConfigInput`<sup>Optional</sup> <a name="containerConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.containerConfigInput"></a>

```typescript
public readonly containerConfigInput: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabImageConfigContainerConfig</a>

---

##### `fileSystemConfigInput`<sup>Optional</sup> <a name="fileSystemConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.fileSystemConfigInput"></a>

```typescript
public readonly fileSystemConfigInput: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig">SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerAppImageConfigJupyterLabImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabImageConfig">SagemakerAppImageConfigJupyterLabImageConfig</a>

---


### SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference <a name="SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultGid">resetDefaultGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultUid">resetDefaultUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGid` <a name="resetDefaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultGid"></a>

```typescript
public resetDefaultGid(): void
```

##### `resetDefaultUid` <a name="resetDefaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultUid"></a>

```typescript
public resetDefaultUid(): void
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGidInput">defaultGidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUidInput">defaultUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid">defaultGid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid">defaultUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultGidInput`<sup>Optional</sup> <a name="defaultGidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGidInput"></a>

```typescript
public readonly defaultGidInput: number;
```

- *Type:* number

---

##### `defaultUidInput`<sup>Optional</sup> <a name="defaultUidInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUidInput"></a>

```typescript
public readonly defaultUidInput: number;
```

- *Type:* number

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `defaultGid`<sup>Required</sup> <a name="defaultGid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```typescript
public readonly defaultGid: number;
```

- *Type:* number

---

##### `defaultUid`<sup>Required</sup> <a name="defaultUid" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```typescript
public readonly defaultUid: number;
```

- *Type:* number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---


### SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList <a name="SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.get"></a>

```typescript
public get(index: number): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>[]

---


### SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference <a name="SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>

---


### SagemakerAppImageConfigKernelGatewayImageConfigOutputReference <a name="SagemakerAppImageConfigKernelGatewayImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktf/provider-aws'

new sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putFileSystemConfig">putFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putKernelSpec">putKernelSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resetFileSystemConfig">resetFileSystemConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileSystemConfig` <a name="putFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putFileSystemConfig"></a>

```typescript
public putFileSystemConfig(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---

##### `putKernelSpec` <a name="putKernelSpec" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putKernelSpec"></a>

```typescript
public putKernelSpec(value: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putKernelSpec.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>[]

---

##### `resetFileSystemConfig` <a name="resetFileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resetFileSystemConfig"></a>

```typescript
public resetFileSystemConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpec">kernelSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfigInput">fileSystemConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecInput">kernelSpecInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemConfig`<sup>Required</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a>

---

##### `kernelSpec`<sup>Required</sup> <a name="kernelSpec" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpec"></a>

```typescript
public readonly kernelSpec: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList</a>

---

##### `fileSystemConfigInput`<sup>Optional</sup> <a name="fileSystemConfigInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfigInput"></a>

```typescript
public readonly fileSystemConfigInput: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---

##### `kernelSpecInput`<sup>Optional</sup> <a name="kernelSpecInput" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecInput"></a>

```typescript
public readonly kernelSpecInput: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerAppImageConfigKernelGatewayImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

---



