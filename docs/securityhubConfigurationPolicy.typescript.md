# `securityhubConfigurationPolicy` Submodule <a name="`securityhubConfigurationPolicy` Submodule" id="@cdktf/provider-aws.securityhubConfigurationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConfigurationPolicy <a name="SecurityhubConfigurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy aws_securityhub_configuration_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicy(scope: Construct, id: string, config: SecurityhubConfigurationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig">SecurityhubConfigurationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig">SecurityhubConfigurationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy">putConfigurationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigurationPolicy` <a name="putConfigurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy"></a>

```typescript
public putConfigurationPolicy(value: SecurityhubConfigurationPolicyConfigurationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityhubConfigurationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityhubConfigurationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubConfigurationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubConfigurationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityhubConfigurationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicy">configurationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference">SecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyInput">configurationPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configurationPolicy`<sup>Required</sup> <a name="configurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicy"></a>

```typescript
public readonly configurationPolicy: SecurityhubConfigurationPolicyConfigurationPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference">SecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a>

---

##### `configurationPolicyInput`<sup>Optional</sup> <a name="configurationPolicyInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyInput"></a>

```typescript
public readonly configurationPolicyInput: SecurityhubConfigurationPolicyConfigurationPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConfigurationPolicyConfig <a name="SecurityhubConfigurationPolicyConfig" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfig: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.configurationPolicy">configurationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | configuration_policy block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#description SecurityhubConfigurationPolicy#description}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#id SecurityhubConfigurationPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationPolicy`<sup>Required</sup> <a name="configurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.configurationPolicy"></a>

```typescript
public readonly configurationPolicy: SecurityhubConfigurationPolicyConfigurationPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

configuration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#configuration_policy SecurityhubConfigurationPolicy#configuration_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#description SecurityhubConfigurationPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#id SecurityhubConfigurationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#region SecurityhubConfigurationPolicy#region}

---

### SecurityhubConfigurationPolicyConfigurationPolicy <a name="SecurityhubConfigurationPolicyConfigurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicy: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.serviceEnabled">serviceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#service_enabled SecurityhubConfigurationPolicy#service_enabled}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.enabledStandardArns">enabledStandardArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#enabled_standard_arns SecurityhubConfigurationPolicy#enabled_standard_arns}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.securityControlsConfiguration">securityControlsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a></code> | security_controls_configuration block. |

---

##### `serviceEnabled`<sup>Required</sup> <a name="serviceEnabled" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.serviceEnabled"></a>

```typescript
public readonly serviceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#service_enabled SecurityhubConfigurationPolicy#service_enabled}.

---

##### `enabledStandardArns`<sup>Optional</sup> <a name="enabledStandardArns" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.enabledStandardArns"></a>

```typescript
public readonly enabledStandardArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#enabled_standard_arns SecurityhubConfigurationPolicy#enabled_standard_arns}.

---

##### `securityControlsConfiguration`<sup>Optional</sup> <a name="securityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.securityControlsConfiguration"></a>

```typescript
public readonly securityControlsConfiguration: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a>

security_controls_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#security_controls_configuration SecurityhubConfigurationPolicy#security_controls_configuration}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.disabledControlIdentifiers">disabledControlIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#disabled_control_identifiers SecurityhubConfigurationPolicy#disabled_control_identifiers}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.enabledControlIdentifiers">enabledControlIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#enabled_control_identifiers SecurityhubConfigurationPolicy#enabled_control_identifiers}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.securityControlCustomParameter">securityControlCustomParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter</a>[]</code> | security_control_custom_parameter block. |

---

##### `disabledControlIdentifiers`<sup>Optional</sup> <a name="disabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.disabledControlIdentifiers"></a>

```typescript
public readonly disabledControlIdentifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#disabled_control_identifiers SecurityhubConfigurationPolicy#disabled_control_identifiers}.

---

##### `enabledControlIdentifiers`<sup>Optional</sup> <a name="enabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.enabledControlIdentifiers"></a>

```typescript
public readonly enabledControlIdentifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#enabled_control_identifiers SecurityhubConfigurationPolicy#enabled_control_identifiers}.

---

##### `securityControlCustomParameter`<sup>Optional</sup> <a name="securityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.securityControlCustomParameter"></a>

```typescript
public readonly securityControlCustomParameter: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter</a>[]

security_control_custom_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#security_control_custom_parameter SecurityhubConfigurationPolicy#security_control_custom_parameter}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.property.securityControlId">securityControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#security_control_id SecurityhubConfigurationPolicy#security_control_id}. |

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#parameter SecurityhubConfigurationPolicy#parameter}

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#security_control_id SecurityhubConfigurationPolicy#security_control_id}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.valueType">valueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value_type SecurityhubConfigurationPolicy#value_type}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.bool">bool</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a></code> | bool block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.double">double</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a></code> | double block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.enum">enum</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a></code> | enum block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.enumList">enumList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a></code> | enum_list block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.int">int</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a></code> | int block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.intList">intList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a></code> | int_list block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.string">string</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a></code> | string block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.stringList">stringList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a></code> | string_list block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}.

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value_type SecurityhubConfigurationPolicy#value_type}.

---

##### `bool`<sup>Optional</sup> <a name="bool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.bool"></a>

```typescript
public readonly bool: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a>

bool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#bool SecurityhubConfigurationPolicy#bool}

---

##### `double`<sup>Optional</sup> <a name="double" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.double"></a>

```typescript
public readonly double: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a>

double block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#double SecurityhubConfigurationPolicy#double}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.enum"></a>

```typescript
public readonly enum: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a>

enum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#enum SecurityhubConfigurationPolicy#enum}

---

##### `enumList`<sup>Optional</sup> <a name="enumList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.enumList"></a>

```typescript
public readonly enumList: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a>

enum_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#enum_list SecurityhubConfigurationPolicy#enum_list}

---

##### `int`<sup>Optional</sup> <a name="int" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.int"></a>

```typescript
public readonly int: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a>

int block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#int SecurityhubConfigurationPolicy#int}

---

##### `intList`<sup>Optional</sup> <a name="intList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.intList"></a>

```typescript
public readonly intList: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a>

int_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#int_list SecurityhubConfigurationPolicy#int_list}

---

##### `string`<sup>Optional</sup> <a name="string" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.string"></a>

```typescript
public readonly string: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a>

string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#string SecurityhubConfigurationPolicy#string}

---

##### `stringList`<sup>Optional</sup> <a name="stringList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.stringList"></a>

```typescript
public readonly stringList: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a>

string_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#string_list SecurityhubConfigurationPolicy#string_list}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct.property.value">value</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct.property.value"></a>

```typescript
public readonly value: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

const securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct: securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConfigurationPolicyConfigurationPolicyOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicyOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityControlsConfiguration">putSecurityControlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetEnabledStandardArns">resetEnabledStandardArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetSecurityControlsConfiguration">resetSecurityControlsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecurityControlsConfiguration` <a name="putSecurityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityControlsConfiguration"></a>

```typescript
public putSecurityControlsConfiguration(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityControlsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a>

---

##### `resetEnabledStandardArns` <a name="resetEnabledStandardArns" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetEnabledStandardArns"></a>

```typescript
public resetEnabledStandardArns(): void
```

##### `resetSecurityControlsConfiguration` <a name="resetSecurityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetSecurityControlsConfiguration"></a>

```typescript
public resetSecurityControlsConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityControlsConfiguration">securityControlsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.enabledStandardArnsInput">enabledStandardArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityControlsConfigurationInput">securityControlsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.serviceEnabledInput">serviceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.enabledStandardArns">enabledStandardArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.serviceEnabled">serviceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityControlsConfiguration`<sup>Required</sup> <a name="securityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityControlsConfiguration"></a>

```typescript
public readonly securityControlsConfiguration: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference</a>

---

##### `enabledStandardArnsInput`<sup>Optional</sup> <a name="enabledStandardArnsInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.enabledStandardArnsInput"></a>

```typescript
public readonly enabledStandardArnsInput: string[];
```

- *Type:* string[]

---

##### `securityControlsConfigurationInput`<sup>Optional</sup> <a name="securityControlsConfigurationInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityControlsConfigurationInput"></a>

```typescript
public readonly securityControlsConfigurationInput: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a>

---

##### `serviceEnabledInput`<sup>Optional</sup> <a name="serviceEnabledInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.serviceEnabledInput"></a>

```typescript
public readonly serviceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledStandardArns`<sup>Required</sup> <a name="enabledStandardArns" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.enabledStandardArns"></a>

```typescript
public readonly enabledStandardArns: string[];
```

- *Type:* string[]

---

##### `serviceEnabled`<sup>Required</sup> <a name="serviceEnabled" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.serviceEnabled"></a>

```typescript
public readonly serviceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.putSecurityControlCustomParameter">putSecurityControlCustomParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetDisabledControlIdentifiers">resetDisabledControlIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetEnabledControlIdentifiers">resetEnabledControlIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetSecurityControlCustomParameter">resetSecurityControlCustomParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecurityControlCustomParameter` <a name="putSecurityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.putSecurityControlCustomParameter"></a>

```typescript
public putSecurityControlCustomParameter(value: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.putSecurityControlCustomParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter</a>[]

---

##### `resetDisabledControlIdentifiers` <a name="resetDisabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetDisabledControlIdentifiers"></a>

```typescript
public resetDisabledControlIdentifiers(): void
```

##### `resetEnabledControlIdentifiers` <a name="resetEnabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetEnabledControlIdentifiers"></a>

```typescript
public resetEnabledControlIdentifiers(): void
```

##### `resetSecurityControlCustomParameter` <a name="resetSecurityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetSecurityControlCustomParameter"></a>

```typescript
public resetSecurityControlCustomParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.securityControlCustomParameter">securityControlCustomParameter</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.disabledControlIdentifiersInput">disabledControlIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.enabledControlIdentifiersInput">enabledControlIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.securityControlCustomParameterInput">securityControlCustomParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.disabledControlIdentifiers">disabledControlIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.enabledControlIdentifiers">enabledControlIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityControlCustomParameter`<sup>Required</sup> <a name="securityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.securityControlCustomParameter"></a>

```typescript
public readonly securityControlCustomParameter: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList</a>

---

##### `disabledControlIdentifiersInput`<sup>Optional</sup> <a name="disabledControlIdentifiersInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.disabledControlIdentifiersInput"></a>

```typescript
public readonly disabledControlIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `enabledControlIdentifiersInput`<sup>Optional</sup> <a name="enabledControlIdentifiersInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.enabledControlIdentifiersInput"></a>

```typescript
public readonly enabledControlIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `securityControlCustomParameterInput`<sup>Optional</sup> <a name="securityControlCustomParameterInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.securityControlCustomParameterInput"></a>

```typescript
public readonly securityControlCustomParameterInput: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter</a>[]

---

##### `disabledControlIdentifiers`<sup>Required</sup> <a name="disabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.disabledControlIdentifiers"></a>

```typescript
public readonly disabledControlIdentifiers: string[];
```

- *Type:* string[]

---

##### `enabledControlIdentifiers`<sup>Required</sup> <a name="enabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.enabledControlIdentifiers"></a>

```typescript
public readonly enabledControlIdentifiers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.get"></a>

```typescript
public get(index: number): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter</a>[]

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.putParameter">putParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.securityControlIdInput">securityControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.securityControlId">securityControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.parameter"></a>

```typescript
public readonly parameter: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList</a>

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter</a>[]

---

##### `securityControlIdInput`<sup>Optional</sup> <a name="securityControlIdInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.securityControlIdInput"></a>

```typescript
public readonly securityControlIdInput: string;
```

- *Type:* string

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.valueInput">valueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.valueInput">valueInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.value">value</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number[];
```

- *Type:* number[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.value"></a>

```typescript
public readonly value: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.get"></a>

```typescript
public get(index: number): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter</a>[]

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putBool">putBool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putDouble">putDouble</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnum">putEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnumList">putEnumList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putInt">putInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putIntList">putIntList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putString">putString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putStringList">putStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetBool">resetBool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetDouble">resetDouble</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetEnumList">resetEnumList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetInt">resetInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetIntList">resetIntList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetString">resetString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetStringList">resetStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBool` <a name="putBool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putBool"></a>

```typescript
public putBool(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putBool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a>

---

##### `putDouble` <a name="putDouble" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putDouble"></a>

```typescript
public putDouble(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putDouble.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a>

---

##### `putEnum` <a name="putEnum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnum"></a>

```typescript
public putEnum(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a>

---

##### `putEnumList` <a name="putEnumList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnumList"></a>

```typescript
public putEnumList(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnumList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a>

---

##### `putInt` <a name="putInt" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putInt"></a>

```typescript
public putInt(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putInt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a>

---

##### `putIntList` <a name="putIntList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putIntList"></a>

```typescript
public putIntList(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putIntList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a>

---

##### `putString` <a name="putString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putString"></a>

```typescript
public putString(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putString.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a>

---

##### `putStringList` <a name="putStringList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putStringList"></a>

```typescript
public putStringList(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putStringList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a>

---

##### `resetBool` <a name="resetBool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetBool"></a>

```typescript
public resetBool(): void
```

##### `resetDouble` <a name="resetDouble" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetDouble"></a>

```typescript
public resetDouble(): void
```

##### `resetEnum` <a name="resetEnum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetEnumList` <a name="resetEnumList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetEnumList"></a>

```typescript
public resetEnumList(): void
```

##### `resetInt` <a name="resetInt" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetInt"></a>

```typescript
public resetInt(): void
```

##### `resetIntList` <a name="resetIntList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetIntList"></a>

```typescript
public resetIntList(): void
```

##### `resetString` <a name="resetString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetString"></a>

```typescript
public resetString(): void
```

##### `resetStringList` <a name="resetStringList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetStringList"></a>

```typescript
public resetStringList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.bool">bool</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.double">double</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enum">enum</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumList">enumList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.int">int</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intList">intList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.string">string</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringList">stringList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.boolInput">boolInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.doubleInput">doubleInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumInput">enumInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumListInput">enumListInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intInput">intInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intListInput">intListInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringInput">stringInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringListInput">stringListInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bool`<sup>Required</sup> <a name="bool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.bool"></a>

```typescript
public readonly bool: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference</a>

---

##### `double`<sup>Required</sup> <a name="double" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.double"></a>

```typescript
public readonly double: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference</a>

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enum"></a>

```typescript
public readonly enum: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference</a>

---

##### `enumList`<sup>Required</sup> <a name="enumList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumList"></a>

```typescript
public readonly enumList: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference</a>

---

##### `int`<sup>Required</sup> <a name="int" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.int"></a>

```typescript
public readonly int: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference</a>

---

##### `intList`<sup>Required</sup> <a name="intList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intList"></a>

```typescript
public readonly intList: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference</a>

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.string"></a>

```typescript
public readonly string: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference</a>

---

##### `stringList`<sup>Required</sup> <a name="stringList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringList"></a>

```typescript
public readonly stringList: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference</a>

---

##### `boolInput`<sup>Optional</sup> <a name="boolInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.boolInput"></a>

```typescript
public readonly boolInput: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a>

---

##### `doubleInput`<sup>Optional</sup> <a name="doubleInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.doubleInput"></a>

```typescript
public readonly doubleInput: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a>

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumInput"></a>

```typescript
public readonly enumInput: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a>

---

##### `enumListInput`<sup>Optional</sup> <a name="enumListInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumListInput"></a>

```typescript
public readonly enumListInput: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a>

---

##### `intInput`<sup>Optional</sup> <a name="intInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intInput"></a>

```typescript
public readonly intInput: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a>

---

##### `intListInput`<sup>Optional</sup> <a name="intListInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intListInput"></a>

```typescript
public readonly intListInput: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stringInput`<sup>Optional</sup> <a name="stringInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringInput"></a>

```typescript
public readonly stringInput: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a>

---

##### `stringListInput`<sup>Optional</sup> <a name="stringListInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringListInput"></a>

```typescript
public readonly stringListInput: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer"></a>

```typescript
import { securityhubConfigurationPolicy } from '@cdktf/provider-aws'

new securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString;
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a>

---



