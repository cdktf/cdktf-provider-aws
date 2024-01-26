# `ssoadminCustomerManagedPolicyAttachment` Submodule <a name="`ssoadminCustomerManagedPolicyAttachment` Submodule" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminCustomerManagedPolicyAttachment <a name="SsoadminCustomerManagedPolicyAttachment" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment aws_ssoadmin_customer_managed_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

new ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment(scope: Construct, id: string, config: SsoadminCustomerManagedPolicyAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig">SsoadminCustomerManagedPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig">SsoadminCustomerManagedPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putCustomerManagedPolicyReference">putCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedPolicyReference` <a name="putCustomerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putCustomerManagedPolicyReference"></a>

```typescript
public putCustomerManagedPolicyReference(value: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putCustomerManagedPolicyReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: SsoadminCustomerManagedPolicyAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminCustomerManagedPolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SsoadminCustomerManagedPolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoadminCustomerManagedPolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoadminCustomerManagedPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminCustomerManagedPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference">SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReferenceInput">customerManagedPolicyReferenceInput</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArnInput">permissionSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference">SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference</a>

---

##### `customerManagedPolicyReferenceInput`<sup>Optional</sup> <a name="customerManagedPolicyReferenceInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReferenceInput"></a>

```typescript
public readonly customerManagedPolicyReferenceInput: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `permissionSetArnInput`<sup>Optional</sup> <a name="permissionSetArnInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArnInput"></a>

```typescript
public readonly permissionSetArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SsoadminCustomerManagedPolicyAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminCustomerManagedPolicyAttachmentConfig <a name="SsoadminCustomerManagedPolicyAttachmentConfig" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

const ssoadminCustomerManagedPolicyAttachmentConfig: ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | customer_managed_policy_reference block. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

customer_managed_policy_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#customer_managed_policy_reference SsoadminCustomerManagedPolicyAttachment#customer_managed_policy_reference}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SsoadminCustomerManagedPolicyAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#timeouts SsoadminCustomerManagedPolicyAttachment#timeouts}

---

### SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference <a name="SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

const ssoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference: ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#name SsoadminCustomerManagedPolicyAttachment#name}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#path SsoadminCustomerManagedPolicyAttachment#path}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#name SsoadminCustomerManagedPolicyAttachment#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#path SsoadminCustomerManagedPolicyAttachment#path}.

---

### SsoadminCustomerManagedPolicyAttachmentTimeouts <a name="SsoadminCustomerManagedPolicyAttachmentTimeouts" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

const ssoadminCustomerManagedPolicyAttachmentTimeouts: ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#create SsoadminCustomerManagedPolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#delete SsoadminCustomerManagedPolicyAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#create SsoadminCustomerManagedPolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/ssoadmin_customer_managed_policy_attachment#delete SsoadminCustomerManagedPolicyAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference <a name="SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

new ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

---


### SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference <a name="SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachment } from '@cdktf/provider-aws'

new ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminCustomerManagedPolicyAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a>

---



