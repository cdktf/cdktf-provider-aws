# `quicksightAccountSubscription` Submodule <a name="`quicksightAccountSubscription` Submodule" id="@cdktf/provider-aws.quicksightAccountSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAccountSubscription <a name="QuicksightAccountSubscription" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer"></a>

```typescript
import { quicksightAccountSubscription } from '@cdktf/provider-aws'

new quicksightAccountSubscription.QuicksightAccountSubscription(scope: Construct, id: string, config: QuicksightAccountSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig">QuicksightAccountSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig">QuicksightAccountSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName">resetActiveDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup">resetAdminGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup">resetAuthorGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber">resetContactNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetIamIdentityCenterInstanceArn">resetIamIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup">resetReaderGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm">resetRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: QuicksightAccountSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

---

##### `resetActiveDirectoryName` <a name="resetActiveDirectoryName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName"></a>

```typescript
public resetActiveDirectoryName(): void
```

##### `resetAdminGroup` <a name="resetAdminGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup"></a>

```typescript
public resetAdminGroup(): void
```

##### `resetAuthorGroup` <a name="resetAuthorGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup"></a>

```typescript
public resetAuthorGroup(): void
```

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetContactNumber` <a name="resetContactNumber" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber"></a>

```typescript
public resetContactNumber(): void
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetIamIdentityCenterInstanceArn` <a name="resetIamIdentityCenterInstanceArn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetIamIdentityCenterInstanceArn"></a>

```typescript
public resetIamIdentityCenterInstanceArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetReaderGroup` <a name="resetReaderGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup"></a>

```typescript
public resetReaderGroup(): void
```

##### `resetRealm` <a name="resetRealm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm"></a>

```typescript
public resetRealm(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightAccountSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct"></a>

```typescript
import { quicksightAccountSubscription } from '@cdktf/provider-aws'

quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement"></a>

```typescript
import { quicksightAccountSubscription } from '@cdktf/provider-aws'

quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource"></a>

```typescript
import { quicksightAccountSubscription } from '@cdktf/provider-aws'

quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport"></a>

```typescript
import { quicksightAccountSubscription } from '@cdktf/provider-aws'

quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QuicksightAccountSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightAccountSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightAccountSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightAccountSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus">accountSubscriptionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput">activeDirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput">adminGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput">authorGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput">contactNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArnInput">iamIdentityCenterInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput">notificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput">readerGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput">realmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName">activeDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup">adminGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup">authorGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber">contactNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail">notificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup">readerGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm">realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountSubscriptionStatus`<sup>Required</sup> <a name="accountSubscriptionStatus" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus"></a>

```typescript
public readonly accountSubscriptionStatus: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: QuicksightAccountSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `activeDirectoryNameInput`<sup>Optional</sup> <a name="activeDirectoryNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput"></a>

```typescript
public readonly activeDirectoryNameInput: string;
```

- *Type:* string

---

##### `adminGroupInput`<sup>Optional</sup> <a name="adminGroupInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput"></a>

```typescript
public readonly adminGroupInput: string[];
```

- *Type:* string[]

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput"></a>

```typescript
public readonly authenticationMethodInput: string;
```

- *Type:* string

---

##### `authorGroupInput`<sup>Optional</sup> <a name="authorGroupInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput"></a>

```typescript
public readonly authorGroupInput: string[];
```

- *Type:* string[]

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `contactNumberInput`<sup>Optional</sup> <a name="contactNumberInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput"></a>

```typescript
public readonly contactNumberInput: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `iamIdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArnInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArnInput"></a>

```typescript
public readonly iamIdentityCenterInstanceArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput"></a>

```typescript
public readonly notificationEmailInput: string;
```

- *Type:* string

---

##### `readerGroupInput`<sup>Optional</sup> <a name="readerGroupInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput"></a>

```typescript
public readonly readerGroupInput: string[];
```

- *Type:* string[]

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput"></a>

```typescript
public readonly realmInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | QuicksightAccountSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `activeDirectoryName`<sup>Required</sup> <a name="activeDirectoryName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName"></a>

```typescript
public readonly activeDirectoryName: string;
```

- *Type:* string

---

##### `adminGroup`<sup>Required</sup> <a name="adminGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup"></a>

```typescript
public readonly adminGroup: string[];
```

- *Type:* string[]

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

---

##### `authorGroup`<sup>Required</sup> <a name="authorGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup"></a>

```typescript
public readonly authorGroup: string[];
```

- *Type:* string[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `contactNumber`<sup>Required</sup> <a name="contactNumber" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber"></a>

```typescript
public readonly contactNumber: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `iamIdentityCenterInstanceArn`<sup>Required</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArn"></a>

```typescript
public readonly iamIdentityCenterInstanceArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail"></a>

```typescript
public readonly notificationEmail: string;
```

- *Type:* string

---

##### `readerGroup`<sup>Required</sup> <a name="readerGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup"></a>

```typescript
public readonly readerGroup: string[];
```

- *Type:* string[]

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAccountSubscriptionConfig <a name="QuicksightAccountSubscriptionConfig" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.Initializer"></a>

```typescript
import { quicksightAccountSubscription } from '@cdktf/provider-aws'

const quicksightAccountSubscriptionConfig: quicksightAccountSubscription.QuicksightAccountSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition">edition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail">notificationEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName">activeDirectoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup">adminGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup">authorGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber">contactNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup">readerGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm">realm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}.

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}.

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}.

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail"></a>

```typescript
public readonly notificationEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}.

---

##### `activeDirectoryName`<sup>Optional</sup> <a name="activeDirectoryName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName"></a>

```typescript
public readonly activeDirectoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}.

---

##### `adminGroup`<sup>Optional</sup> <a name="adminGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup"></a>

```typescript
public readonly adminGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}.

---

##### `authorGroup`<sup>Optional</sup> <a name="authorGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup"></a>

```typescript
public readonly authorGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}.

---

##### `contactNumber`<sup>Optional</sup> <a name="contactNumber" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber"></a>

```typescript
public readonly contactNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}.

---

##### `iamIdentityCenterInstanceArn`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.iamIdentityCenterInstanceArn"></a>

```typescript
public readonly iamIdentityCenterInstanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}.

---

##### `readerGroup`<sup>Optional</sup> <a name="readerGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup"></a>

```typescript
public readonly readerGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#region QuicksightAccountSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: QuicksightAccountSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#timeouts QuicksightAccountSubscription#timeouts}

---

### QuicksightAccountSubscriptionTimeouts <a name="QuicksightAccountSubscriptionTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.Initializer"></a>

```typescript
import { quicksightAccountSubscription } from '@cdktf/provider-aws'

const quicksightAccountSubscriptionTimeouts: quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAccountSubscriptionTimeoutsOutputReference <a name="QuicksightAccountSubscriptionTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { quicksightAccountSubscription } from '@cdktf/provider-aws'

new quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightAccountSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

---



