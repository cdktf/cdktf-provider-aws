# `customerprofilesDomain` Submodule <a name="`customerprofilesDomain` Submodule" id="@cdktf/provider-aws.customerprofilesDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesDomain <a name="CustomerprofilesDomain" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain aws_customerprofiles_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomain(scope: Construct, id: string, config: CustomerprofilesDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig">CustomerprofilesDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig">CustomerprofilesDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching">putMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching">putRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDeadLetterQueueUrl">resetDeadLetterQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDefaultEncryptionKey">resetDefaultEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetMatching">resetMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRuleBasedMatching">resetRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatching` <a name="putMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching"></a>

```typescript
public putMatching(value: CustomerprofilesDomainMatching): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---

##### `putRuleBasedMatching` <a name="putRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching"></a>

```typescript
public putRuleBasedMatching(value: CustomerprofilesDomainRuleBasedMatching): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---

##### `resetDeadLetterQueueUrl` <a name="resetDeadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDeadLetterQueueUrl"></a>

```typescript
public resetDeadLetterQueueUrl(): void
```

##### `resetDefaultEncryptionKey` <a name="resetDefaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDefaultEncryptionKey"></a>

```typescript
public resetDefaultEncryptionKey(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMatching` <a name="resetMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetMatching"></a>

```typescript
public resetMatching(): void
```

##### `resetRuleBasedMatching` <a name="resetRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRuleBasedMatching"></a>

```typescript
public resetRuleBasedMatching(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

customerprofilesDomain.CustomerprofilesDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

customerprofilesDomain.CustomerprofilesDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

customerprofilesDomain.CustomerprofilesDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomerprofilesDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matching">matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference">CustomerprofilesDomainMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatching">ruleBasedMatching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference">CustomerprofilesDomainRuleBasedMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrlInput">deadLetterQueueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKeyInput">defaultEncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDaysInput">defaultExpirationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matchingInput">matchingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatchingInput">ruleBasedMatchingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrl">deadLetterQueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKey">defaultEncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDays">defaultExpirationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `matching`<sup>Required</sup> <a name="matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matching"></a>

```typescript
public readonly matching: CustomerprofilesDomainMatchingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference">CustomerprofilesDomainMatchingOutputReference</a>

---

##### `ruleBasedMatching`<sup>Required</sup> <a name="ruleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatching"></a>

```typescript
public readonly ruleBasedMatching: CustomerprofilesDomainRuleBasedMatchingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference">CustomerprofilesDomainRuleBasedMatchingOutputReference</a>

---

##### `deadLetterQueueUrlInput`<sup>Optional</sup> <a name="deadLetterQueueUrlInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrlInput"></a>

```typescript
public readonly deadLetterQueueUrlInput: string;
```

- *Type:* string

---

##### `defaultEncryptionKeyInput`<sup>Optional</sup> <a name="defaultEncryptionKeyInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKeyInput"></a>

```typescript
public readonly defaultEncryptionKeyInput: string;
```

- *Type:* string

---

##### `defaultExpirationDaysInput`<sup>Optional</sup> <a name="defaultExpirationDaysInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDaysInput"></a>

```typescript
public readonly defaultExpirationDaysInput: number;
```

- *Type:* number

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchingInput`<sup>Optional</sup> <a name="matchingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matchingInput"></a>

```typescript
public readonly matchingInput: CustomerprofilesDomainMatching;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---

##### `ruleBasedMatchingInput`<sup>Optional</sup> <a name="ruleBasedMatchingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatchingInput"></a>

```typescript
public readonly ruleBasedMatchingInput: CustomerprofilesDomainRuleBasedMatching;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deadLetterQueueUrl`<sup>Required</sup> <a name="deadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrl"></a>

```typescript
public readonly deadLetterQueueUrl: string;
```

- *Type:* string

---

##### `defaultEncryptionKey`<sup>Required</sup> <a name="defaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKey"></a>

```typescript
public readonly defaultEncryptionKey: string;
```

- *Type:* string

---

##### `defaultExpirationDays`<sup>Required</sup> <a name="defaultExpirationDays" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDays"></a>

```typescript
public readonly defaultExpirationDays: number;
```

- *Type:* number

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesDomainConfig <a name="CustomerprofilesDomainConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainConfig: customerprofilesDomain.CustomerprofilesDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultExpirationDays">defaultExpirationDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.deadLetterQueueUrl">deadLetterQueueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultEncryptionKey">defaultEncryptionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.matching">matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.ruleBasedMatching">ruleBasedMatching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | rule_based_matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultExpirationDays`<sup>Required</sup> <a name="defaultExpirationDays" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultExpirationDays"></a>

```typescript
public readonly defaultExpirationDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}.

---

##### `deadLetterQueueUrl`<sup>Optional</sup> <a name="deadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.deadLetterQueueUrl"></a>

```typescript
public readonly deadLetterQueueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}.

---

##### `defaultEncryptionKey`<sup>Optional</sup> <a name="defaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultEncryptionKey"></a>

```typescript
public readonly defaultEncryptionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matching`<sup>Optional</sup> <a name="matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.matching"></a>

```typescript
public readonly matching: CustomerprofilesDomainMatching;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#matching CustomerprofilesDomain#matching}

---

##### `ruleBasedMatching`<sup>Optional</sup> <a name="ruleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.ruleBasedMatching"></a>

```typescript
public readonly ruleBasedMatching: CustomerprofilesDomainRuleBasedMatching;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

rule_based_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#rule_based_matching CustomerprofilesDomain#rule_based_matching}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}.

---

### CustomerprofilesDomainMatching <a name="CustomerprofilesDomainMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainMatching: customerprofilesDomain.CustomerprofilesDomainMatching = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.autoMerging">autoMerging</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | auto_merging block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.exportingConfig">exportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | exporting_config block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.jobSchedule">jobSchedule</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | job_schedule block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `autoMerging`<sup>Optional</sup> <a name="autoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.autoMerging"></a>

```typescript
public readonly autoMerging: CustomerprofilesDomainMatchingAutoMerging;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

auto_merging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#auto_merging CustomerprofilesDomain#auto_merging}

---

##### `exportingConfig`<sup>Optional</sup> <a name="exportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.exportingConfig"></a>

```typescript
public readonly exportingConfig: CustomerprofilesDomainMatchingExportingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

##### `jobSchedule`<sup>Optional</sup> <a name="jobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.jobSchedule"></a>

```typescript
public readonly jobSchedule: CustomerprofilesDomainMatchingJobSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

job_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#job_schedule CustomerprofilesDomain#job_schedule}

---

### CustomerprofilesDomainMatchingAutoMerging <a name="CustomerprofilesDomainMatchingAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainMatchingAutoMerging: customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.conflictResolution">conflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | conflict_resolution block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.consolidation">consolidation</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | consolidation block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.minAllowedConfidenceScoreForMerging">minAllowedConfidenceScoreForMerging</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `conflictResolution`<sup>Optional</sup> <a name="conflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.conflictResolution"></a>

```typescript
public readonly conflictResolution: CustomerprofilesDomainMatchingAutoMergingConflictResolution;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

##### `consolidation`<sup>Optional</sup> <a name="consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.consolidation"></a>

```typescript
public readonly consolidation: CustomerprofilesDomainMatchingAutoMergingConsolidation;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

consolidation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#consolidation CustomerprofilesDomain#consolidation}

---

##### `minAllowedConfidenceScoreForMerging`<sup>Optional</sup> <a name="minAllowedConfidenceScoreForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.minAllowedConfidenceScoreForMerging"></a>

```typescript
public readonly minAllowedConfidenceScoreForMerging: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}.

---

### CustomerprofilesDomainMatchingAutoMergingConflictResolution <a name="CustomerprofilesDomainMatchingAutoMergingConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainMatchingAutoMergingConflictResolution: customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.conflictResolvingModel">conflictResolvingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}. |

---

##### `conflictResolvingModel`<sup>Required</sup> <a name="conflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.conflictResolvingModel"></a>

```typescript
public readonly conflictResolvingModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

### CustomerprofilesDomainMatchingAutoMergingConsolidation <a name="CustomerprofilesDomainMatchingAutoMergingConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainMatchingAutoMergingConsolidation: customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.property.matchingAttributesList">matchingAttributesList</a></code> | <code>cdktf.IResolvable \| string[][]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}. |

---

##### `matchingAttributesList`<sup>Required</sup> <a name="matchingAttributesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.property.matchingAttributesList"></a>

```typescript
public readonly matchingAttributesList: IResolvable | string[][];
```

- *Type:* cdktf.IResolvable | string[][]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}.

---

### CustomerprofilesDomainMatchingExportingConfig <a name="CustomerprofilesDomainMatchingExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainMatchingExportingConfig: customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.property.s3Exporting">s3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | s3_exporting block. |

---

##### `s3Exporting`<sup>Optional</sup> <a name="s3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.property.s3Exporting"></a>

```typescript
public readonly s3Exporting: CustomerprofilesDomainMatchingExportingConfigS3Exporting;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

### CustomerprofilesDomainMatchingExportingConfigS3Exporting <a name="CustomerprofilesDomainMatchingExportingConfigS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainMatchingExportingConfigS3Exporting: customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3KeyName">s3KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}. |

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

##### `s3KeyName`<sup>Optional</sup> <a name="s3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3KeyName"></a>

```typescript
public readonly s3KeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

### CustomerprofilesDomainMatchingJobSchedule <a name="CustomerprofilesDomainMatchingJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainMatchingJobSchedule: customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}. |

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}.

---

### CustomerprofilesDomainRuleBasedMatching <a name="CustomerprofilesDomainRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainRuleBasedMatching: customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.attributeTypesSelector">attributeTypesSelector</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | attribute_types_selector block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.conflictResolution">conflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | conflict_resolution block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.exportingConfig">exportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | exporting_config block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.matchingRules">matchingRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>[]</code> | matching_rules block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMatching">maxAllowedRuleLevelForMatching</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMerging">maxAllowedRuleLevelForMerging</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `attributeTypesSelector`<sup>Optional</sup> <a name="attributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.attributeTypesSelector"></a>

```typescript
public readonly attributeTypesSelector: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

attribute_types_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#attribute_types_selector CustomerprofilesDomain#attribute_types_selector}

---

##### `conflictResolution`<sup>Optional</sup> <a name="conflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.conflictResolution"></a>

```typescript
public readonly conflictResolution: CustomerprofilesDomainRuleBasedMatchingConflictResolution;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

##### `exportingConfig`<sup>Optional</sup> <a name="exportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.exportingConfig"></a>

```typescript
public readonly exportingConfig: CustomerprofilesDomainRuleBasedMatchingExportingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

##### `matchingRules`<sup>Optional</sup> <a name="matchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.matchingRules"></a>

```typescript
public readonly matchingRules: IResolvable | CustomerprofilesDomainRuleBasedMatchingMatchingRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>[]

matching_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#matching_rules CustomerprofilesDomain#matching_rules}

---

##### `maxAllowedRuleLevelForMatching`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMatching"></a>

```typescript
public readonly maxAllowedRuleLevelForMatching: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}.

---

##### `maxAllowedRuleLevelForMerging`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMerging"></a>

```typescript
public readonly maxAllowedRuleLevelForMerging: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}.

---

### CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector <a name="CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainRuleBasedMatchingAttributeTypesSelector: customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.address">address</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.emailAddress">emailAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.phoneNumber">phoneNumber</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}. |

---

##### `attributeMatchingModel`<sup>Required</sup> <a name="attributeMatchingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.attributeMatchingModel"></a>

```typescript
public readonly attributeMatchingModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.address"></a>

```typescript
public readonly address: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.emailAddress"></a>

```typescript
public readonly emailAddress: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}.

---

### CustomerprofilesDomainRuleBasedMatchingConflictResolution <a name="CustomerprofilesDomainRuleBasedMatchingConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainRuleBasedMatchingConflictResolution: customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.conflictResolvingModel">conflictResolvingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}. |

---

##### `conflictResolvingModel`<sup>Required</sup> <a name="conflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.conflictResolvingModel"></a>

```typescript
public readonly conflictResolvingModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

### CustomerprofilesDomainRuleBasedMatchingExportingConfig <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainRuleBasedMatchingExportingConfig: customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.property.s3Exporting">s3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | s3_exporting block. |

---

##### `s3Exporting`<sup>Optional</sup> <a name="s3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.property.s3Exporting"></a>

```typescript
public readonly s3Exporting: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

### CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting: customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3KeyName">s3KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}. |

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

##### `s3KeyName`<sup>Optional</sup> <a name="s3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3KeyName"></a>

```typescript
public readonly s3KeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

### CustomerprofilesDomainRuleBasedMatchingMatchingRules <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

const customerprofilesDomainRuleBasedMatchingMatchingRules: customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.property.rule">rule</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.property.rule"></a>

```typescript
public readonly rule: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceName` <a name="resetSourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resetSourceName"></a>

```typescript
public resetSourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModelInput">conflictResolvingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModel">conflictResolvingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conflictResolvingModelInput`<sup>Optional</sup> <a name="conflictResolvingModelInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModelInput"></a>

```typescript
public readonly conflictResolvingModelInput: string;
```

- *Type:* string

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `conflictResolvingModel`<sup>Required</sup> <a name="conflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModel"></a>

```typescript
public readonly conflictResolvingModel: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainMatchingAutoMergingConflictResolution;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---


### CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesListInput">matchingAttributesListInput</a></code> | <code>cdktf.IResolvable \| string[][]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesList">matchingAttributesList</a></code> | <code>cdktf.IResolvable \| string[][]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingAttributesListInput`<sup>Optional</sup> <a name="matchingAttributesListInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesListInput"></a>

```typescript
public readonly matchingAttributesListInput: IResolvable | string[][];
```

- *Type:* cdktf.IResolvable | string[][]

---

##### `matchingAttributesList`<sup>Required</sup> <a name="matchingAttributesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesList"></a>

```typescript
public readonly matchingAttributesList: IResolvable | string[][];
```

- *Type:* cdktf.IResolvable | string[][]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainMatchingAutoMergingConsolidation;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---


### CustomerprofilesDomainMatchingAutoMergingOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution">putConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation">putConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConflictResolution">resetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConsolidation">resetConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetMinAllowedConfidenceScoreForMerging">resetMinAllowedConfidenceScoreForMerging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConflictResolution` <a name="putConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution"></a>

```typescript
public putConflictResolution(value: CustomerprofilesDomainMatchingAutoMergingConflictResolution): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---

##### `putConsolidation` <a name="putConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation"></a>

```typescript
public putConsolidation(value: CustomerprofilesDomainMatchingAutoMergingConsolidation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---

##### `resetConflictResolution` <a name="resetConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConflictResolution"></a>

```typescript
public resetConflictResolution(): void
```

##### `resetConsolidation` <a name="resetConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConsolidation"></a>

```typescript
public resetConsolidation(): void
```

##### `resetMinAllowedConfidenceScoreForMerging` <a name="resetMinAllowedConfidenceScoreForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetMinAllowedConfidenceScoreForMerging"></a>

```typescript
public resetMinAllowedConfidenceScoreForMerging(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolution">conflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference">CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidation">consolidation</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference">CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolutionInput">conflictResolutionInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidationInput">consolidationInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMergingInput">minAllowedConfidenceScoreForMergingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMerging">minAllowedConfidenceScoreForMerging</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conflictResolution`<sup>Required</sup> <a name="conflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolution"></a>

```typescript
public readonly conflictResolution: CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference">CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference</a>

---

##### `consolidation`<sup>Required</sup> <a name="consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidation"></a>

```typescript
public readonly consolidation: CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference">CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference</a>

---

##### `conflictResolutionInput`<sup>Optional</sup> <a name="conflictResolutionInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolutionInput"></a>

```typescript
public readonly conflictResolutionInput: CustomerprofilesDomainMatchingAutoMergingConflictResolution;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---

##### `consolidationInput`<sup>Optional</sup> <a name="consolidationInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidationInput"></a>

```typescript
public readonly consolidationInput: CustomerprofilesDomainMatchingAutoMergingConsolidation;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minAllowedConfidenceScoreForMergingInput`<sup>Optional</sup> <a name="minAllowedConfidenceScoreForMergingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMergingInput"></a>

```typescript
public readonly minAllowedConfidenceScoreForMergingInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minAllowedConfidenceScoreForMerging`<sup>Required</sup> <a name="minAllowedConfidenceScoreForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMerging"></a>

```typescript
public readonly minAllowedConfidenceScoreForMerging: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainMatchingAutoMerging;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---


### CustomerprofilesDomainMatchingExportingConfigOutputReference <a name="CustomerprofilesDomainMatchingExportingConfigOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting">putS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resetS3Exporting">resetS3Exporting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Exporting` <a name="putS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting"></a>

```typescript
public putS3Exporting(value: CustomerprofilesDomainMatchingExportingConfigS3Exporting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---

##### `resetS3Exporting` <a name="resetS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resetS3Exporting"></a>

```typescript
public resetS3Exporting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3Exporting">s3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3ExportingInput">s3ExportingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Exporting`<sup>Required</sup> <a name="s3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3Exporting"></a>

```typescript
public readonly s3Exporting: CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference</a>

---

##### `s3ExportingInput`<sup>Optional</sup> <a name="s3ExportingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3ExportingInput"></a>

```typescript
public readonly s3ExportingInput: CustomerprofilesDomainMatchingExportingConfigS3Exporting;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainMatchingExportingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---


### CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference <a name="CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName">resetS3KeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3KeyName` <a name="resetS3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName"></a>

```typescript
public resetS3KeyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput">s3KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName">s3KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3KeyNameInput`<sup>Optional</sup> <a name="s3KeyNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput"></a>

```typescript
public readonly s3KeyNameInput: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyName`<sup>Required</sup> <a name="s3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName"></a>

```typescript
public readonly s3KeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainMatchingExportingConfigS3Exporting;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---


### CustomerprofilesDomainMatchingJobScheduleOutputReference <a name="CustomerprofilesDomainMatchingJobScheduleOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeekInput">dayOfTheWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfTheWeekInput`<sup>Optional</sup> <a name="dayOfTheWeekInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeekInput"></a>

```typescript
public readonly dayOfTheWeekInput: string;
```

- *Type:* string

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainMatchingJobSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---


### CustomerprofilesDomainMatchingOutputReference <a name="CustomerprofilesDomainMatchingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging">putAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig">putExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule">putJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetAutoMerging">resetAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetExportingConfig">resetExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetJobSchedule">resetJobSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoMerging` <a name="putAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging"></a>

```typescript
public putAutoMerging(value: CustomerprofilesDomainMatchingAutoMerging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---

##### `putExportingConfig` <a name="putExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig"></a>

```typescript
public putExportingConfig(value: CustomerprofilesDomainMatchingExportingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---

##### `putJobSchedule` <a name="putJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule"></a>

```typescript
public putJobSchedule(value: CustomerprofilesDomainMatchingJobSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---

##### `resetAutoMerging` <a name="resetAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetAutoMerging"></a>

```typescript
public resetAutoMerging(): void
```

##### `resetExportingConfig` <a name="resetExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetExportingConfig"></a>

```typescript
public resetExportingConfig(): void
```

##### `resetJobSchedule` <a name="resetJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetJobSchedule"></a>

```typescript
public resetJobSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMerging">autoMerging</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference">CustomerprofilesDomainMatchingAutoMergingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfig">exportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference">CustomerprofilesDomainMatchingExportingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobSchedule">jobSchedule</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference">CustomerprofilesDomainMatchingJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMergingInput">autoMergingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfigInput">exportingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobScheduleInput">jobScheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoMerging`<sup>Required</sup> <a name="autoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMerging"></a>

```typescript
public readonly autoMerging: CustomerprofilesDomainMatchingAutoMergingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference">CustomerprofilesDomainMatchingAutoMergingOutputReference</a>

---

##### `exportingConfig`<sup>Required</sup> <a name="exportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfig"></a>

```typescript
public readonly exportingConfig: CustomerprofilesDomainMatchingExportingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference">CustomerprofilesDomainMatchingExportingConfigOutputReference</a>

---

##### `jobSchedule`<sup>Required</sup> <a name="jobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobSchedule"></a>

```typescript
public readonly jobSchedule: CustomerprofilesDomainMatchingJobScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference">CustomerprofilesDomainMatchingJobScheduleOutputReference</a>

---

##### `autoMergingInput`<sup>Optional</sup> <a name="autoMergingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMergingInput"></a>

```typescript
public readonly autoMergingInput: CustomerprofilesDomainMatchingAutoMerging;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportingConfigInput`<sup>Optional</sup> <a name="exportingConfigInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfigInput"></a>

```typescript
public readonly exportingConfigInput: CustomerprofilesDomainMatchingExportingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---

##### `jobScheduleInput`<sup>Optional</sup> <a name="jobScheduleInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobScheduleInput"></a>

```typescript
public readonly jobScheduleInput: CustomerprofilesDomainMatchingJobSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainMatching;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---


### CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.addressInput">addressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModelInput">attributeMatchingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.address">address</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddress">emailAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string[];
```

- *Type:* string[]

---

##### `attributeMatchingModelInput`<sup>Optional</sup> <a name="attributeMatchingModelInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModelInput"></a>

```typescript
public readonly attributeMatchingModelInput: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string[];
```

- *Type:* string[]

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string[];
```

- *Type:* string[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.address"></a>

```typescript
public readonly address: string[];
```

- *Type:* string[]

---

##### `attributeMatchingModel`<sup>Required</sup> <a name="attributeMatchingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModel"></a>

```typescript
public readonly attributeMatchingModel: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string[];
```

- *Type:* string[]

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---


### CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceName` <a name="resetSourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resetSourceName"></a>

```typescript
public resetSourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModelInput">conflictResolvingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModel">conflictResolvingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conflictResolvingModelInput`<sup>Optional</sup> <a name="conflictResolvingModelInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModelInput"></a>

```typescript
public readonly conflictResolvingModelInput: string;
```

- *Type:* string

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `conflictResolvingModel`<sup>Required</sup> <a name="conflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModel"></a>

```typescript
public readonly conflictResolvingModel: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainRuleBasedMatchingConflictResolution;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---


### CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting">putS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resetS3Exporting">resetS3Exporting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Exporting` <a name="putS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting"></a>

```typescript
public putS3Exporting(value: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---

##### `resetS3Exporting` <a name="resetS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resetS3Exporting"></a>

```typescript
public resetS3Exporting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3Exporting">s3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3ExportingInput">s3ExportingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Exporting`<sup>Required</sup> <a name="s3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3Exporting"></a>

```typescript
public readonly s3Exporting: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference</a>

---

##### `s3ExportingInput`<sup>Optional</sup> <a name="s3ExportingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3ExportingInput"></a>

```typescript
public readonly s3ExportingInput: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainRuleBasedMatchingExportingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---


### CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName">resetS3KeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3KeyName` <a name="resetS3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName"></a>

```typescript
public resetS3KeyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput">s3KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName">s3KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3KeyNameInput`<sup>Optional</sup> <a name="s3KeyNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput"></a>

```typescript
public readonly s3KeyNameInput: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyName`<sup>Required</sup> <a name="s3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName"></a>

```typescript
public readonly s3KeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---


### CustomerprofilesDomainRuleBasedMatchingMatchingRulesList <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRulesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get"></a>

```typescript
public get(index: number): CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesDomainRuleBasedMatchingMatchingRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>[]

---


### CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.ruleInput">ruleInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.rule">rule</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string[];
```

- *Type:* string[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.rule"></a>

```typescript
public readonly rule: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesDomainRuleBasedMatchingMatchingRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>

---


### CustomerprofilesDomainRuleBasedMatchingOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomain } from '@cdktf/provider-aws'

new customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector">putAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution">putConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig">putExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules">putMatchingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetAttributeTypesSelector">resetAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetConflictResolution">resetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetExportingConfig">resetExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMatchingRules">resetMatchingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMatching">resetMaxAllowedRuleLevelForMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMerging">resetMaxAllowedRuleLevelForMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeTypesSelector` <a name="putAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector"></a>

```typescript
public putAttributeTypesSelector(value: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---

##### `putConflictResolution` <a name="putConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution"></a>

```typescript
public putConflictResolution(value: CustomerprofilesDomainRuleBasedMatchingConflictResolution): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---

##### `putExportingConfig` <a name="putExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig"></a>

```typescript
public putExportingConfig(value: CustomerprofilesDomainRuleBasedMatchingExportingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---

##### `putMatchingRules` <a name="putMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules"></a>

```typescript
public putMatchingRules(value: IResolvable | CustomerprofilesDomainRuleBasedMatchingMatchingRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>[]

---

##### `resetAttributeTypesSelector` <a name="resetAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetAttributeTypesSelector"></a>

```typescript
public resetAttributeTypesSelector(): void
```

##### `resetConflictResolution` <a name="resetConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetConflictResolution"></a>

```typescript
public resetConflictResolution(): void
```

##### `resetExportingConfig` <a name="resetExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetExportingConfig"></a>

```typescript
public resetExportingConfig(): void
```

##### `resetMatchingRules` <a name="resetMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMatchingRules"></a>

```typescript
public resetMatchingRules(): void
```

##### `resetMaxAllowedRuleLevelForMatching` <a name="resetMaxAllowedRuleLevelForMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMatching"></a>

```typescript
public resetMaxAllowedRuleLevelForMatching(): void
```

##### `resetMaxAllowedRuleLevelForMerging` <a name="resetMaxAllowedRuleLevelForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMerging"></a>

```typescript
public resetMaxAllowedRuleLevelForMerging(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelector">attributeTypesSelector</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolution">conflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference">CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfig">exportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRules">matchingRules</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList">CustomerprofilesDomainRuleBasedMatchingMatchingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelectorInput">attributeTypesSelectorInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolutionInput">conflictResolutionInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfigInput">exportingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRulesInput">matchingRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatchingInput">maxAllowedRuleLevelForMatchingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMergingInput">maxAllowedRuleLevelForMergingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatching">maxAllowedRuleLevelForMatching</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMerging">maxAllowedRuleLevelForMerging</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeTypesSelector`<sup>Required</sup> <a name="attributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelector"></a>

```typescript
public readonly attributeTypesSelector: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference</a>

---

##### `conflictResolution`<sup>Required</sup> <a name="conflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolution"></a>

```typescript
public readonly conflictResolution: CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference">CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference</a>

---

##### `exportingConfig`<sup>Required</sup> <a name="exportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfig"></a>

```typescript
public readonly exportingConfig: CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference</a>

---

##### `matchingRules`<sup>Required</sup> <a name="matchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRules"></a>

```typescript
public readonly matchingRules: CustomerprofilesDomainRuleBasedMatchingMatchingRulesList;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList">CustomerprofilesDomainRuleBasedMatchingMatchingRulesList</a>

---

##### `attributeTypesSelectorInput`<sup>Optional</sup> <a name="attributeTypesSelectorInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelectorInput"></a>

```typescript
public readonly attributeTypesSelectorInput: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---

##### `conflictResolutionInput`<sup>Optional</sup> <a name="conflictResolutionInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolutionInput"></a>

```typescript
public readonly conflictResolutionInput: CustomerprofilesDomainRuleBasedMatchingConflictResolution;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportingConfigInput`<sup>Optional</sup> <a name="exportingConfigInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfigInput"></a>

```typescript
public readonly exportingConfigInput: CustomerprofilesDomainRuleBasedMatchingExportingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---

##### `matchingRulesInput`<sup>Optional</sup> <a name="matchingRulesInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRulesInput"></a>

```typescript
public readonly matchingRulesInput: IResolvable | CustomerprofilesDomainRuleBasedMatchingMatchingRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>[]

---

##### `maxAllowedRuleLevelForMatchingInput`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMatchingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatchingInput"></a>

```typescript
public readonly maxAllowedRuleLevelForMatchingInput: number;
```

- *Type:* number

---

##### `maxAllowedRuleLevelForMergingInput`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMergingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMergingInput"></a>

```typescript
public readonly maxAllowedRuleLevelForMergingInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxAllowedRuleLevelForMatching`<sup>Required</sup> <a name="maxAllowedRuleLevelForMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatching"></a>

```typescript
public readonly maxAllowedRuleLevelForMatching: number;
```

- *Type:* number

---

##### `maxAllowedRuleLevelForMerging`<sup>Required</sup> <a name="maxAllowedRuleLevelForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMerging"></a>

```typescript
public readonly maxAllowedRuleLevelForMerging: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesDomainRuleBasedMatching;
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---



