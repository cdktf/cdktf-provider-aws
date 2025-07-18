# `amplifyDomainAssociation` Submodule <a name="`amplifyDomainAssociation` Submodule" id="@cdktf/provider-aws.amplifyDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyDomainAssociation <a name="AmplifyDomainAssociation" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association aws_amplify_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

new amplifyDomainAssociation.AmplifyDomainAssociation(scope: Construct, id: string, config: AmplifyDomainAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig">AmplifyDomainAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig">AmplifyDomainAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putCertificateSettings">putCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putSubDomain">putSubDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetCertificateSettings">resetCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetEnableAutoSubDomain">resetEnableAutoSubDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetWaitForVerification">resetWaitForVerification</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificateSettings` <a name="putCertificateSettings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putCertificateSettings"></a>

```typescript
public putCertificateSettings(value: AmplifyDomainAssociationCertificateSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putCertificateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a>

---

##### `putSubDomain` <a name="putSubDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putSubDomain"></a>

```typescript
public putSubDomain(value: IResolvable | AmplifyDomainAssociationSubDomain[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putSubDomain.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>[]

---

##### `resetCertificateSettings` <a name="resetCertificateSettings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetCertificateSettings"></a>

```typescript
public resetCertificateSettings(): void
```

##### `resetEnableAutoSubDomain` <a name="resetEnableAutoSubDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetEnableAutoSubDomain"></a>

```typescript
public resetEnableAutoSubDomain(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetWaitForVerification` <a name="resetWaitForVerification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetWaitForVerification"></a>

```typescript
public resetWaitForVerification(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AmplifyDomainAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AmplifyDomainAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AmplifyDomainAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AmplifyDomainAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AmplifyDomainAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateSettings">certificateSettings</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference">AmplifyDomainAssociationCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateVerificationDnsRecord">certificateVerificationDnsRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomain">subDomain</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList">AmplifyDomainAssociationSubDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateSettingsInput">certificateSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.enableAutoSubDomainInput">enableAutoSubDomainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomainInput">subDomainInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerificationInput">waitForVerificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.enableAutoSubDomain">enableAutoSubDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerification">waitForVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateSettings`<sup>Required</sup> <a name="certificateSettings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateSettings"></a>

```typescript
public readonly certificateSettings: AmplifyDomainAssociationCertificateSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference">AmplifyDomainAssociationCertificateSettingsOutputReference</a>

---

##### `certificateVerificationDnsRecord`<sup>Required</sup> <a name="certificateVerificationDnsRecord" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateVerificationDnsRecord"></a>

```typescript
public readonly certificateVerificationDnsRecord: string;
```

- *Type:* string

---

##### `subDomain`<sup>Required</sup> <a name="subDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomain"></a>

```typescript
public readonly subDomain: AmplifyDomainAssociationSubDomainList;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList">AmplifyDomainAssociationSubDomainList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `certificateSettingsInput`<sup>Optional</sup> <a name="certificateSettingsInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateSettingsInput"></a>

```typescript
public readonly certificateSettingsInput: AmplifyDomainAssociationCertificateSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `enableAutoSubDomainInput`<sup>Optional</sup> <a name="enableAutoSubDomainInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.enableAutoSubDomainInput"></a>

```typescript
public readonly enableAutoSubDomainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `subDomainInput`<sup>Optional</sup> <a name="subDomainInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomainInput"></a>

```typescript
public readonly subDomainInput: IResolvable | AmplifyDomainAssociationSubDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>[]

---

##### `waitForVerificationInput`<sup>Optional</sup> <a name="waitForVerificationInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerificationInput"></a>

```typescript
public readonly waitForVerificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `enableAutoSubDomain`<sup>Required</sup> <a name="enableAutoSubDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.enableAutoSubDomain"></a>

```typescript
public readonly enableAutoSubDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `waitForVerification`<sup>Required</sup> <a name="waitForVerification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerification"></a>

```typescript
public readonly waitForVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyDomainAssociationCertificateSettings <a name="AmplifyDomainAssociationCertificateSettings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.Initializer"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

const amplifyDomainAssociationCertificateSettings: amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#type AmplifyDomainAssociation#type}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.property.customCertificateArn">customCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#custom_certificate_arn AmplifyDomainAssociation#custom_certificate_arn}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#type AmplifyDomainAssociation#type}.

---

##### `customCertificateArn`<sup>Optional</sup> <a name="customCertificateArn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.property.customCertificateArn"></a>

```typescript
public readonly customCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#custom_certificate_arn AmplifyDomainAssociation#custom_certificate_arn}.

---

### AmplifyDomainAssociationConfig <a name="AmplifyDomainAssociationConfig" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.Initializer"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

const amplifyDomainAssociationConfig: amplifyDomainAssociation.AmplifyDomainAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.subDomain">subDomain</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>[]</code> | sub_domain block. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.certificateSettings">certificateSettings</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a></code> | certificate_settings block. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.enableAutoSubDomain">enableAutoSubDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#enable_auto_sub_domain AmplifyDomainAssociation#enable_auto_sub_domain}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#id AmplifyDomainAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.waitForVerification">waitForVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}.

---

##### `subDomain`<sup>Required</sup> <a name="subDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.subDomain"></a>

```typescript
public readonly subDomain: IResolvable | AmplifyDomainAssociationSubDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>[]

sub_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#sub_domain AmplifyDomainAssociation#sub_domain}

---

##### `certificateSettings`<sup>Optional</sup> <a name="certificateSettings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.certificateSettings"></a>

```typescript
public readonly certificateSettings: AmplifyDomainAssociationCertificateSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a>

certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#certificate_settings AmplifyDomainAssociation#certificate_settings}

---

##### `enableAutoSubDomain`<sup>Optional</sup> <a name="enableAutoSubDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.enableAutoSubDomain"></a>

```typescript
public readonly enableAutoSubDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#enable_auto_sub_domain AmplifyDomainAssociation#enable_auto_sub_domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#id AmplifyDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#region AmplifyDomainAssociation#region}

---

##### `waitForVerification`<sup>Optional</sup> <a name="waitForVerification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.waitForVerification"></a>

```typescript
public readonly waitForVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}.

---

### AmplifyDomainAssociationSubDomain <a name="AmplifyDomainAssociationSubDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.Initializer"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

const amplifyDomainAssociationSubDomain: amplifyDomainAssociation.AmplifyDomainAssociationSubDomain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.branchName">branchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#branch_name AmplifyDomainAssociation#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#prefix AmplifyDomainAssociation#prefix}. |

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#branch_name AmplifyDomainAssociation#branch_name}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/amplify_domain_association#prefix AmplifyDomainAssociation#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyDomainAssociationCertificateSettingsOutputReference <a name="AmplifyDomainAssociationCertificateSettingsOutputReference" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

new amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resetCustomCertificateArn">resetCustomCertificateArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomCertificateArn` <a name="resetCustomCertificateArn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resetCustomCertificateArn"></a>

```typescript
public resetCustomCertificateArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.certificateVerificationDnsRecord">certificateVerificationDnsRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.customCertificateArnInput">customCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.customCertificateArn">customCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateVerificationDnsRecord`<sup>Required</sup> <a name="certificateVerificationDnsRecord" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.certificateVerificationDnsRecord"></a>

```typescript
public readonly certificateVerificationDnsRecord: string;
```

- *Type:* string

---

##### `customCertificateArnInput`<sup>Optional</sup> <a name="customCertificateArnInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.customCertificateArnInput"></a>

```typescript
public readonly customCertificateArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `customCertificateArn`<sup>Required</sup> <a name="customCertificateArn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.customCertificateArn"></a>

```typescript
public readonly customCertificateArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AmplifyDomainAssociationCertificateSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a>

---


### AmplifyDomainAssociationSubDomainList <a name="AmplifyDomainAssociationSubDomainList" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

new amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.get"></a>

```typescript
public get(index: number): AmplifyDomainAssociationSubDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyDomainAssociationSubDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>[]

---


### AmplifyDomainAssociationSubDomainOutputReference <a name="AmplifyDomainAssociationSubDomainOutputReference" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer"></a>

```typescript
import { amplifyDomainAssociation } from '@cdktf/provider-aws'

new amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.dnsRecord">dnsRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.verified">verified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsRecord`<sup>Required</sup> <a name="dnsRecord" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.dnsRecord"></a>

```typescript
public readonly dnsRecord: string;
```

- *Type:* string

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.verified"></a>

```typescript
public readonly verified: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchNameInput"></a>

```typescript
public readonly branchNameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyDomainAssociationSubDomain;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>

---



