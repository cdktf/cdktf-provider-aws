# `shieldDrtAccessLogBucketAssociation` Submodule <a name="`shieldDrtAccessLogBucketAssociation` Submodule" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldDrtAccessLogBucketAssociation <a name="ShieldDrtAccessLogBucketAssociation" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association aws_shield_drt_access_log_bucket_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer"></a>

```typescript
import { shieldDrtAccessLogBucketAssociation } from '@cdktf/provider-aws'

new shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation(scope: Construct, id: string, config: ShieldDrtAccessLogBucketAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig">ShieldDrtAccessLogBucketAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig">ShieldDrtAccessLogBucketAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: ShieldDrtAccessLogBucketAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldDrtAccessLogBucketAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct"></a>

```typescript
import { shieldDrtAccessLogBucketAssociation } from '@cdktf/provider-aws'

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement"></a>

```typescript
import { shieldDrtAccessLogBucketAssociation } from '@cdktf/provider-aws'

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource"></a>

```typescript
import { shieldDrtAccessLogBucketAssociation } from '@cdktf/provider-aws'

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport"></a>

```typescript
import { shieldDrtAccessLogBucketAssociation } from '@cdktf/provider-aws'

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ShieldDrtAccessLogBucketAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldDrtAccessLogBucketAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldDrtAccessLogBucketAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ShieldDrtAccessLogBucketAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference">ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucketInput">logBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationIdInput">roleArnAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucket">logBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationId">roleArnAssociationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference">ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference</a>

---

##### `logBucketInput`<sup>Optional</sup> <a name="logBucketInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucketInput"></a>

```typescript
public readonly logBucketInput: string;
```

- *Type:* string

---

##### `roleArnAssociationIdInput`<sup>Optional</sup> <a name="roleArnAssociationIdInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationIdInput"></a>

```typescript
public readonly roleArnAssociationIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ShieldDrtAccessLogBucketAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucket"></a>

```typescript
public readonly logBucket: string;
```

- *Type:* string

---

##### `roleArnAssociationId`<sup>Required</sup> <a name="roleArnAssociationId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationId"></a>

```typescript
public readonly roleArnAssociationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldDrtAccessLogBucketAssociationConfig <a name="ShieldDrtAccessLogBucketAssociationConfig" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.Initializer"></a>

```typescript
import { shieldDrtAccessLogBucketAssociation } from '@cdktf/provider-aws'

const shieldDrtAccessLogBucketAssociationConfig: shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.logBucket">logBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.roleArnAssociationId">roleArnAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association#role_arn_association_id ShieldDrtAccessLogBucketAssociation#role_arn_association_id}. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.logBucket"></a>

```typescript
public readonly logBucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}.

---

##### `roleArnAssociationId`<sup>Required</sup> <a name="roleArnAssociationId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.roleArnAssociationId"></a>

```typescript
public readonly roleArnAssociationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association#role_arn_association_id ShieldDrtAccessLogBucketAssociation#role_arn_association_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ShieldDrtAccessLogBucketAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association#timeouts ShieldDrtAccessLogBucketAssociation#timeouts}

---

### ShieldDrtAccessLogBucketAssociationTimeouts <a name="ShieldDrtAccessLogBucketAssociationTimeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.Initializer"></a>

```typescript
import { shieldDrtAccessLogBucketAssociation } from '@cdktf/provider-aws'

const shieldDrtAccessLogBucketAssociationTimeouts: shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.read">read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association#create ShieldDrtAccessLogBucketAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association#delete ShieldDrtAccessLogBucketAssociation#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/shield_drt_access_log_bucket_association#read ShieldDrtAccessLogBucketAssociation#read}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference <a name="ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { shieldDrtAccessLogBucketAssociation } from '@cdktf/provider-aws'

new shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldDrtAccessLogBucketAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

---



