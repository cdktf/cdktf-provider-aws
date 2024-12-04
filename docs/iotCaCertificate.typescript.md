# `iotCaCertificate` Submodule <a name="`iotCaCertificate` Submodule" id="@cdktf/provider-aws.iotCaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCaCertificate <a name="IotCaCertificate" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate aws_iot_ca_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

new iotCaCertificate.IotCaCertificate(scope: Construct, id: string, config: IotCaCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig">IotCaCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig">IotCaCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.putRegistrationConfig">putRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetCertificateMode">resetCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetRegistrationConfig">resetRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem">resetVerificationCertificatePem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRegistrationConfig` <a name="putRegistrationConfig" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.putRegistrationConfig"></a>

```typescript
public putRegistrationConfig(value: IotCaCertificateRegistrationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.putRegistrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---

##### `resetCertificateMode` <a name="resetCertificateMode" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetCertificateMode"></a>

```typescript
public resetCertificateMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegistrationConfig` <a name="resetRegistrationConfig" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetRegistrationConfig"></a>

```typescript
public resetRegistrationConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVerificationCertificatePem` <a name="resetVerificationCertificatePem" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem"></a>

```typescript
public resetVerificationCertificatePem(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotCaCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.isConstruct"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

iotCaCertificate.IotCaCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.isTerraformElement"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

iotCaCertificate.IotCaCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.isTerraformResource"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

iotCaCertificate.IotCaCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.generateConfigForImport"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

iotCaCertificate.IotCaCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IotCaCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotCaCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotCaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotCaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.customerVersion">customerVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.generationId">generationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.registrationConfig">registrationConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.validity">validity</a></code> | <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList">IotCaCertificateValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.allowAutoRegistrationInput">allowAutoRegistrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput">caCertificatePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.certificateModeInput">certificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.registrationConfigInput">registrationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput">verificationCertificatePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.allowAutoRegistration">allowAutoRegistration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.caCertificatePem">caCertificatePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.certificateMode">certificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem">verificationCertificatePem</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customerVersion`<sup>Required</sup> <a name="customerVersion" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.customerVersion"></a>

```typescript
public readonly customerVersion: number;
```

- *Type:* number

---

##### `generationId`<sup>Required</sup> <a name="generationId" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.generationId"></a>

```typescript
public readonly generationId: string;
```

- *Type:* string

---

##### `registrationConfig`<sup>Required</sup> <a name="registrationConfig" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.registrationConfig"></a>

```typescript
public readonly registrationConfig: IotCaCertificateRegistrationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.validity"></a>

```typescript
public readonly validity: IotCaCertificateValidityList;
```

- *Type:* <a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList">IotCaCertificateValidityList</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAutoRegistrationInput`<sup>Optional</sup> <a name="allowAutoRegistrationInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.allowAutoRegistrationInput"></a>

```typescript
public readonly allowAutoRegistrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `caCertificatePemInput`<sup>Optional</sup> <a name="caCertificatePemInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput"></a>

```typescript
public readonly caCertificatePemInput: string;
```

- *Type:* string

---

##### `certificateModeInput`<sup>Optional</sup> <a name="certificateModeInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.certificateModeInput"></a>

```typescript
public readonly certificateModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `registrationConfigInput`<sup>Optional</sup> <a name="registrationConfigInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.registrationConfigInput"></a>

```typescript
public readonly registrationConfigInput: IotCaCertificateRegistrationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `verificationCertificatePemInput`<sup>Optional</sup> <a name="verificationCertificatePemInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput"></a>

```typescript
public readonly verificationCertificatePemInput: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAutoRegistration`<sup>Required</sup> <a name="allowAutoRegistration" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.allowAutoRegistration"></a>

```typescript
public readonly allowAutoRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `caCertificatePem`<sup>Required</sup> <a name="caCertificatePem" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.caCertificatePem"></a>

```typescript
public readonly caCertificatePem: string;
```

- *Type:* string

---

##### `certificateMode`<sup>Required</sup> <a name="certificateMode" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.certificateMode"></a>

```typescript
public readonly certificateMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `verificationCertificatePem`<sup>Required</sup> <a name="verificationCertificatePem" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem"></a>

```typescript
public readonly verificationCertificatePem: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotCaCertificateConfig <a name="IotCaCertificateConfig" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

const iotCaCertificateConfig: iotCaCertificate.IotCaCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#active IotCaCertificate#active}. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.allowAutoRegistration">allowAutoRegistration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#allow_auto_registration IotCaCertificate#allow_auto_registration}. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem">caCertificatePem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.certificateMode">certificateMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#id IotCaCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig">registrationConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | registration_config block. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#tags_all IotCaCertificate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem">verificationCertificatePem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#active IotCaCertificate#active}.

---

##### `allowAutoRegistration`<sup>Required</sup> <a name="allowAutoRegistration" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.allowAutoRegistration"></a>

```typescript
public readonly allowAutoRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#allow_auto_registration IotCaCertificate#allow_auto_registration}.

---

##### `caCertificatePem`<sup>Required</sup> <a name="caCertificatePem" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem"></a>

```typescript
public readonly caCertificatePem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}.

---

##### `certificateMode`<sup>Optional</sup> <a name="certificateMode" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.certificateMode"></a>

```typescript
public readonly certificateMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#id IotCaCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registrationConfig`<sup>Optional</sup> <a name="registrationConfig" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig"></a>

```typescript
public readonly registrationConfig: IotCaCertificateRegistrationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

registration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#tags_all IotCaCertificate#tags_all}.

---

##### `verificationCertificatePem`<sup>Optional</sup> <a name="verificationCertificatePem" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem"></a>

```typescript
public readonly verificationCertificatePem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}.

---

### IotCaCertificateRegistrationConfig <a name="IotCaCertificateRegistrationConfig" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

const iotCaCertificateRegistrationConfig: iotCaCertificate.IotCaCertificateRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody">templateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName">templateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}.

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}.

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}.

---

### IotCaCertificateValidity <a name="IotCaCertificateValidity" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidity.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

const iotCaCertificateValidity: iotCaCertificate.IotCaCertificateValidity = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### IotCaCertificateRegistrationConfigOutputReference <a name="IotCaCertificateRegistrationConfigOutputReference" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

new iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName">resetTemplateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName"></a>

```typescript
public resetTemplateName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotCaCertificateRegistrationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---


### IotCaCertificateValidityList <a name="IotCaCertificateValidityList" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

new iotCaCertificate.IotCaCertificateValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.get"></a>

```typescript
public get(index: number): IotCaCertificateValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IotCaCertificateValidityOutputReference <a name="IotCaCertificateValidityOutputReference" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktf/provider-aws'

new iotCaCertificate.IotCaCertificateValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.notAfter">notAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.notBefore">notBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidity">IotCaCertificateValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotCaCertificateValidity;
```

- *Type:* <a href="#@cdktf/provider-aws.iotCaCertificate.IotCaCertificateValidity">IotCaCertificateValidity</a>

---



