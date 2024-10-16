# `chimesdkvoiceVoiceProfileDomain` Submodule <a name="`chimesdkvoiceVoiceProfileDomain` Submodule" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceVoiceProfileDomain <a name="ChimesdkvoiceVoiceProfileDomain" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain aws_chimesdkvoice_voice_profile_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

new chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain(scope: Construct, id: string, config: ChimesdkvoiceVoiceProfileDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig">ChimesdkvoiceVoiceProfileDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig">ChimesdkvoiceVoiceProfileDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration"></a>

```typescript
public putServerSideEncryptionConfiguration(value: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: ChimesdkvoiceVoiceProfileDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChimesdkvoiceVoiceProfileDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ChimesdkvoiceVoiceProfileDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimesdkvoiceVoiceProfileDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimesdkvoiceVoiceProfileDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceVoiceProfileDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference">ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeouts"></a>

```typescript
public readonly timeouts: ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference">ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfigurationInput"></a>

```typescript
public readonly serverSideEncryptionConfigurationInput: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChimesdkvoiceVoiceProfileDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceVoiceProfileDomainConfig <a name="ChimesdkvoiceVoiceProfileDomainConfig" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.Initializer"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

const chimesdkvoiceVoiceProfileDomainConfig: chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}.

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#server_side_encryption_configuration ChimesdkvoiceVoiceProfileDomain#server_side_encryption_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChimesdkvoiceVoiceProfileDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#timeouts ChimesdkvoiceVoiceProfileDomain#timeouts}

---

### ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration <a name="ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.Initializer"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

const chimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration: chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}.

---

### ChimesdkvoiceVoiceProfileDomainTimeouts <a name="ChimesdkvoiceVoiceProfileDomainTimeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.Initializer"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

const chimesdkvoiceVoiceProfileDomainTimeouts: chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference <a name="ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

new chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---


### ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference <a name="ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { chimesdkvoiceVoiceProfileDomain } from '@cdktf/provider-aws'

new chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimesdkvoiceVoiceProfileDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

---



