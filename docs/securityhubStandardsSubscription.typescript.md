# `securityhubStandardsSubscription` Submodule <a name="`securityhubStandardsSubscription` Submodule" id="@cdktf/provider-aws.securityhubStandardsSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubStandardsSubscription <a name="SecurityhubStandardsSubscription" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription aws_securityhub_standards_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer"></a>

```typescript
import { securityhubStandardsSubscription } from '@cdktf/provider-aws'

new securityhubStandardsSubscription.SecurityhubStandardsSubscription(scope: Construct, id: string, config: SecurityhubStandardsSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig">SecurityhubStandardsSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig">SecurityhubStandardsSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: SecurityhubStandardsSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityhubStandardsSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isConstruct"></a>

```typescript
import { securityhubStandardsSubscription } from '@cdktf/provider-aws'

securityhubStandardsSubscription.SecurityhubStandardsSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformElement"></a>

```typescript
import { securityhubStandardsSubscription } from '@cdktf/provider-aws'

securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformResource"></a>

```typescript
import { securityhubStandardsSubscription } from '@cdktf/provider-aws'

securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport"></a>

```typescript
import { securityhubStandardsSubscription } from '@cdktf/provider-aws'

securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityhubStandardsSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubStandardsSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubStandardsSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityhubStandardsSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference">SecurityhubStandardsSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.standardsArnInput">standardsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.standardsArn">standardsArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityhubStandardsSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference">SecurityhubStandardsSubscriptionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `standardsArnInput`<sup>Optional</sup> <a name="standardsArnInput" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.standardsArnInput"></a>

```typescript
public readonly standardsArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecurityhubStandardsSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.standardsArn"></a>

```typescript
public readonly standardsArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubStandardsSubscriptionConfig <a name="SecurityhubStandardsSubscriptionConfig" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.Initializer"></a>

```typescript
import { securityhubStandardsSubscription } from '@cdktf/provider-aws'

const securityhubStandardsSubscriptionConfig: securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.standardsArn">standardsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#standards_arn SecurityhubStandardsSubscription#standards_arn}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#id SecurityhubStandardsSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.standardsArn"></a>

```typescript
public readonly standardsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#standards_arn SecurityhubStandardsSubscription#standards_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#id SecurityhubStandardsSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityhubStandardsSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#timeouts SecurityhubStandardsSubscription#timeouts}

---

### SecurityhubStandardsSubscriptionTimeouts <a name="SecurityhubStandardsSubscriptionTimeouts" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.Initializer"></a>

```typescript
import { securityhubStandardsSubscription } from '@cdktf/provider-aws'

const securityhubStandardsSubscriptionTimeouts: securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#create SecurityhubStandardsSubscription#create}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#delete SecurityhubStandardsSubscription#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#create SecurityhubStandardsSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/securityhub_standards_subscription#delete SecurityhubStandardsSubscription#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubStandardsSubscriptionTimeoutsOutputReference <a name="SecurityhubStandardsSubscriptionTimeoutsOutputReference" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { securityhubStandardsSubscription } from '@cdktf/provider-aws'

new securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubStandardsSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a>

---



