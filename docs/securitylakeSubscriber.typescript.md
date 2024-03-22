# `securitylakeSubscriber` Submodule <a name="`securitylakeSubscriber` Submodule" id="@cdktf/provider-aws.securitylakeSubscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriber <a name="SecuritylakeSubscriber" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriber(scope: Construct, id: string, config?: SecuritylakeSubscriberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig">SecuritylakeSubscriberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig">SecuritylakeSubscriberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity">putSubscriberIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription">resetSubscriberDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity">resetSubscriberIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName">resetSubscriberName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource"></a>

```typescript
public putSource(value: IResolvable | SecuritylakeSubscriberSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]

---

##### `putSubscriberIdentity` <a name="putSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity"></a>

```typescript
public putSubscriberIdentity(value: IResolvable | SecuritylakeSubscriberSubscriberIdentity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts"></a>

```typescript
public putTimeouts(value: SecuritylakeSubscriberTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---

##### `resetAccessType` <a name="resetAccessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType"></a>

```typescript
public resetAccessType(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSubscriberDescription` <a name="resetSubscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription"></a>

```typescript
public resetSubscriberDescription(): void
```

##### `resetSubscriberIdentity` <a name="resetSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity"></a>

```typescript
public resetSubscriberIdentity(): void
```

##### `resetSubscriberName` <a name="resetSubscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName"></a>

```typescript
public resetSubscriberName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

securitylakeSubscriber.SecuritylakeSubscriber.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeSubscriber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeSubscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn">resourceShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName">resourceShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint">subscriberEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity">subscriberIdentity</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus">subscriberStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput">subscriberDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput">subscriberIdentityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput">subscriberNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription">subscriberDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName">subscriberName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceShareArn`<sup>Required</sup> <a name="resourceShareArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn"></a>

```typescript
public readonly resourceShareArn: string;
```

- *Type:* string

---

##### `resourceShareName`<sup>Required</sup> <a name="resourceShareName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName"></a>

```typescript
public readonly resourceShareName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source"></a>

```typescript
public readonly source: SecuritylakeSubscriberSourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a>

---

##### `subscriberEndpoint`<sup>Required</sup> <a name="subscriberEndpoint" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint"></a>

```typescript
public readonly subscriberEndpoint: string;
```

- *Type:* string

---

##### `subscriberIdentity`<sup>Required</sup> <a name="subscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity"></a>

```typescript
public readonly subscriberIdentity: SecuritylakeSubscriberSubscriberIdentityList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a>

---

##### `subscriberStatus`<sup>Required</sup> <a name="subscriberStatus" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus"></a>

```typescript
public readonly subscriberStatus: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts"></a>

```typescript
public readonly timeouts: SecuritylakeSubscriberTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a>

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | SecuritylakeSubscriberSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]

---

##### `subscriberDescriptionInput`<sup>Optional</sup> <a name="subscriberDescriptionInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput"></a>

```typescript
public readonly subscriberDescriptionInput: string;
```

- *Type:* string

---

##### `subscriberIdentityInput`<sup>Optional</sup> <a name="subscriberIdentityInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput"></a>

```typescript
public readonly subscriberIdentityInput: IResolvable | SecuritylakeSubscriberSubscriberIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]

---

##### `subscriberNameInput`<sup>Optional</sup> <a name="subscriberNameInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput"></a>

```typescript
public readonly subscriberNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecuritylakeSubscriberTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `subscriberDescription`<sup>Required</sup> <a name="subscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription"></a>

```typescript
public readonly subscriberDescription: string;
```

- *Type:* string

---

##### `subscriberName`<sup>Required</sup> <a name="subscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName"></a>

```typescript
public readonly subscriberName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberConfig <a name="SecuritylakeSubscriberConfig" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

const securitylakeSubscriberConfig: securitylakeSubscriber.SecuritylakeSubscriberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType">accessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source">source</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]</code> | source block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription">subscriberDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity">subscriberIdentity</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]</code> | subscriber_identity block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName">subscriberName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source"></a>

```typescript
public readonly source: IResolvable | SecuritylakeSubscriberSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source SecuritylakeSubscriber#source}

---

##### `subscriberDescription`<sup>Optional</sup> <a name="subscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription"></a>

```typescript
public readonly subscriberDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}.

---

##### `subscriberIdentity`<sup>Optional</sup> <a name="subscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity"></a>

```typescript
public readonly subscriberIdentity: IResolvable | SecuritylakeSubscriberSubscriberIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]

subscriber_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_identity SecuritylakeSubscriber#subscriber_identity}

---

##### `subscriberName`<sup>Optional</sup> <a name="subscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName"></a>

```typescript
public readonly subscriberName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecuritylakeSubscriberTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#timeouts SecuritylakeSubscriber#timeouts}

---

### SecuritylakeSubscriberSource <a name="SecuritylakeSubscriberSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

const securitylakeSubscriberSource: securitylakeSubscriber.SecuritylakeSubscriberSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource">awsLogSourceResource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]</code> | aws_log_source_resource block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource">customLogSourceResource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]</code> | custom_log_source_resource block. |

---

##### `awsLogSourceResource`<sup>Optional</sup> <a name="awsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource"></a>

```typescript
public readonly awsLogSourceResource: IResolvable | SecuritylakeSubscriberSourceAwsLogSourceResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]

aws_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#aws_log_source_resource SecuritylakeSubscriber#aws_log_source_resource}

---

##### `customLogSourceResource`<sup>Optional</sup> <a name="customLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource"></a>

```typescript
public readonly customLogSourceResource: IResolvable | SecuritylakeSubscriberSourceCustomLogSourceResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]

custom_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#custom_log_source_resource SecuritylakeSubscriber#custom_log_source_resource}

---

### SecuritylakeSubscriberSourceAwsLogSourceResource <a name="SecuritylakeSubscriberSourceAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

const securitylakeSubscriberSourceAwsLogSourceResource: securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `sourceVersion`<sup>Optional</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResource <a name="SecuritylakeSubscriberSourceCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

const securitylakeSubscriberSourceCustomLogSourceResource: securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `sourceVersion`<sup>Optional</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

const securitylakeSubscriberSourceCustomLogSourceResourceAttributes: securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes = { ... }
```


### SecuritylakeSubscriberSourceCustomLogSourceResourceProvider <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProvider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

const securitylakeSubscriberSourceCustomLogSourceResourceProvider: securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider = { ... }
```


### SecuritylakeSubscriberSubscriberIdentity <a name="SecuritylakeSubscriberSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

const securitylakeSubscriberSubscriberIdentity: securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}.

---

### SecuritylakeSubscriberTimeouts <a name="SecuritylakeSubscriberTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

const securitylakeSubscriberTimeouts: securitylakeSubscriber.SecuritylakeSubscriberTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#create SecuritylakeSubscriber#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#delete SecuritylakeSubscriber#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#update SecuritylakeSubscriber#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberSourceAwsLogSourceResourceList <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get"></a>

```typescript
public get(index: number): SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeSubscriberSourceAwsLogSourceResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]

---


### SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion">resetSourceVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceName` <a name="resetSourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceName"></a>

```typescript
public resetSourceName(): void
```

##### `resetSourceVersion` <a name="resetSourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion"></a>

```typescript
public resetSourceVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput">sourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `sourceVersionInput`<sup>Optional</sup> <a name="sourceVersionInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```typescript
public readonly sourceVersionInput: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeSubscriberSourceAwsLogSourceResource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get"></a>

```typescript
public get(index: number): SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn">crawlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn">databaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn">tableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crawlerArn`<sup>Required</sup> <a name="crawlerArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn"></a>

```typescript
public readonly crawlerArn: string;
```

- *Type:* string

---

##### `databaseArn`<sup>Required</sup> <a name="databaseArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn"></a>

```typescript
public readonly databaseArn: string;
```

- *Type:* string

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get"></a>

```typescript
public get(index: number): SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeSubscriberSourceCustomLogSourceResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion">resetSourceVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceName` <a name="resetSourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceName"></a>

```typescript
public resetSourceName(): void
```

##### `resetSourceVersion` <a name="resetSourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion"></a>

```typescript
public resetSourceVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput">sourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes"></a>

```typescript
public readonly attributes: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a>

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider"></a>

```typescript
public readonly provider: SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a>

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `sourceVersionInput`<sup>Optional</sup> <a name="sourceVersionInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```typescript
public readonly sourceVersionInput: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeSubscriberSourceCustomLogSourceResource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get"></a>

```typescript
public get(index: number): SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecuritylakeSubscriberSourceCustomLogSourceResourceProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a>

---


### SecuritylakeSubscriberSourceList <a name="SecuritylakeSubscriberSourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get"></a>

```typescript
public get(index: number): SecuritylakeSubscriberSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeSubscriberSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]

---


### SecuritylakeSubscriberSourceOutputReference <a name="SecuritylakeSubscriberSourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource">putAwsLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource">putCustomLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource">resetAwsLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource">resetCustomLogSourceResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsLogSourceResource` <a name="putAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource"></a>

```typescript
public putAwsLogSourceResource(value: IResolvable | SecuritylakeSubscriberSourceAwsLogSourceResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]

---

##### `putCustomLogSourceResource` <a name="putCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource"></a>

```typescript
public putCustomLogSourceResource(value: IResolvable | SecuritylakeSubscriberSourceCustomLogSourceResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]

---

##### `resetAwsLogSourceResource` <a name="resetAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource"></a>

```typescript
public resetAwsLogSourceResource(): void
```

##### `resetCustomLogSourceResource` <a name="resetCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource"></a>

```typescript
public resetCustomLogSourceResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource">awsLogSourceResource</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource">customLogSourceResource</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput">awsLogSourceResourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput">customLogSourceResourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsLogSourceResource`<sup>Required</sup> <a name="awsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource"></a>

```typescript
public readonly awsLogSourceResource: SecuritylakeSubscriberSourceAwsLogSourceResourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a>

---

##### `customLogSourceResource`<sup>Required</sup> <a name="customLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource"></a>

```typescript
public readonly customLogSourceResource: SecuritylakeSubscriberSourceCustomLogSourceResourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a>

---

##### `awsLogSourceResourceInput`<sup>Optional</sup> <a name="awsLogSourceResourceInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput"></a>

```typescript
public readonly awsLogSourceResourceInput: IResolvable | SecuritylakeSubscriberSourceAwsLogSourceResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]

---

##### `customLogSourceResourceInput`<sup>Optional</sup> <a name="customLogSourceResourceInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput"></a>

```typescript
public readonly customLogSourceResourceInput: IResolvable | SecuritylakeSubscriberSourceCustomLogSourceResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeSubscriberSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>

---


### SecuritylakeSubscriberSubscriberIdentityList <a name="SecuritylakeSubscriberSubscriberIdentityList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get"></a>

```typescript
public get(index: number): SecuritylakeSubscriberSubscriberIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeSubscriberSubscriberIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]

---


### SecuritylakeSubscriberSubscriberIdentityOutputReference <a name="SecuritylakeSubscriberSubscriberIdentityOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeSubscriberSubscriberIdentity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>

---


### SecuritylakeSubscriberTimeoutsOutputReference <a name="SecuritylakeSubscriberTimeoutsOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer"></a>

```typescript
import { securitylakeSubscriber } from '@cdktf/provider-aws'

new securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecuritylakeSubscriberTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---



