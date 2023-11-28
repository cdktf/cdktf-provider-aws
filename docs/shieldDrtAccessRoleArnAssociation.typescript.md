# `aws_shield_drt_access_role_arn_association`

Refer to the Terraform Registory for docs: [`aws_shield_drt_access_role_arn_association`](https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/shield_drt_access_role_arn_association).

# `shieldDrtAccessRoleArnAssociation` Submodule <a name="`shieldDrtAccessRoleArnAssociation` Submodule" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldDrtAccessRoleArnAssociation <a name="ShieldDrtAccessRoleArnAssociation" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/shield_drt_access_role_arn_association aws_shield_drt_access_role_arn_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer"></a>

```typescript
import { shieldDrtAccessRoleArnAssociation } from '@cdktf/provider-aws'

new shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation(scope: Construct, id: string, config: ShieldDrtAccessRoleArnAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig">ShieldDrtAccessRoleArnAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig">ShieldDrtAccessRoleArnAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: ShieldDrtAccessRoleArnAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldDrtAccessRoleArnAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isConstruct"></a>

```typescript
import { shieldDrtAccessRoleArnAssociation } from '@cdktf/provider-aws'

shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformElement"></a>

```typescript
import { shieldDrtAccessRoleArnAssociation } from '@cdktf/provider-aws'

shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformResource"></a>

```typescript
import { shieldDrtAccessRoleArnAssociation } from '@cdktf/provider-aws'

shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport"></a>

```typescript
import { shieldDrtAccessRoleArnAssociation } from '@cdktf/provider-aws'

shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ShieldDrtAccessRoleArnAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldDrtAccessRoleArnAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldDrtAccessRoleArnAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/shield_drt_access_role_arn_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ShieldDrtAccessRoleArnAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference">ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference">ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ShieldDrtAccessRoleArnAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldDrtAccessRoleArnAssociationConfig <a name="ShieldDrtAccessRoleArnAssociationConfig" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.Initializer"></a>

```typescript
import { shieldDrtAccessRoleArnAssociation } from '@cdktf/provider-aws'

const shieldDrtAccessRoleArnAssociationConfig: shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/shield_drt_access_role_arn_association#role_arn ShieldDrtAccessRoleArnAssociation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/shield_drt_access_role_arn_association#role_arn ShieldDrtAccessRoleArnAssociation#role_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ShieldDrtAccessRoleArnAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/shield_drt_access_role_arn_association#timeouts ShieldDrtAccessRoleArnAssociation#timeouts}

---

### ShieldDrtAccessRoleArnAssociationTimeouts <a name="ShieldDrtAccessRoleArnAssociationTimeouts" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.Initializer"></a>

```typescript
import { shieldDrtAccessRoleArnAssociation } from '@cdktf/provider-aws'

const shieldDrtAccessRoleArnAssociationTimeouts: shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.read">read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/shield_drt_access_role_arn_association#create ShieldDrtAccessRoleArnAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/shield_drt_access_role_arn_association#delete ShieldDrtAccessRoleArnAssociation#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/shield_drt_access_role_arn_association#read ShieldDrtAccessRoleArnAssociation#read}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference <a name="ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { shieldDrtAccessRoleArnAssociation } from '@cdktf/provider-aws'

new shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldDrtAccessRoleArnAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldDrtAccessRoleArnAssociation.ShieldDrtAccessRoleArnAssociationTimeouts">ShieldDrtAccessRoleArnAssociationTimeouts</a>

---



