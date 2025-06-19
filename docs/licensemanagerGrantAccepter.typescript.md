# `licensemanagerGrantAccepter` Submodule <a name="`licensemanagerGrantAccepter` Submodule" id="@cdktf/provider-aws.licensemanagerGrantAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerGrantAccepter <a name="LicensemanagerGrantAccepter" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/licensemanager_grant_accepter aws_licensemanager_grant_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.Initializer"></a>

```typescript
import { licensemanagerGrantAccepter } from '@cdktf/provider-aws'

new licensemanagerGrantAccepter.LicensemanagerGrantAccepter(scope: Construct, id: string, config: LicensemanagerGrantAccepterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig">LicensemanagerGrantAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig">LicensemanagerGrantAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LicensemanagerGrantAccepter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isConstruct"></a>

```typescript
import { licensemanagerGrantAccepter } from '@cdktf/provider-aws'

licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isTerraformElement"></a>

```typescript
import { licensemanagerGrantAccepter } from '@cdktf/provider-aws'

licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isTerraformResource"></a>

```typescript
import { licensemanagerGrantAccepter } from '@cdktf/provider-aws'

licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.generateConfigForImport"></a>

```typescript
import { licensemanagerGrantAccepter } from '@cdktf/provider-aws'

licensemanagerGrantAccepter.LicensemanagerGrantAccepter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LicensemanagerGrantAccepter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerGrantAccepter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerGrantAccepter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/licensemanager_grant_accepter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LicensemanagerGrantAccepter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.allowedOperations">allowedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.homeRegion">homeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.licenseArn">licenseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.parentArn">parentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.grantArnInput">grantArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.grantArn">grantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedOperations`<sup>Required</sup> <a name="allowedOperations" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.allowedOperations"></a>

```typescript
public readonly allowedOperations: string[];
```

- *Type:* string[]

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

---

##### `licenseArn`<sup>Required</sup> <a name="licenseArn" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.licenseArn"></a>

```typescript
public readonly licenseArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentArn`<sup>Required</sup> <a name="parentArn" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.parentArn"></a>

```typescript
public readonly parentArn: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `grantArnInput`<sup>Optional</sup> <a name="grantArnInput" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.grantArnInput"></a>

```typescript
public readonly grantArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `grantArn`<sup>Required</sup> <a name="grantArn" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.grantArn"></a>

```typescript
public readonly grantArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerGrantAccepterConfig <a name="LicensemanagerGrantAccepterConfig" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.Initializer"></a>

```typescript
import { licensemanagerGrantAccepter } from '@cdktf/provider-aws'

const licensemanagerGrantAccepterConfig: licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.grantArn">grantArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the grant. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/licensemanager_grant_accepter#id LicensemanagerGrantAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `grantArn`<sup>Required</sup> <a name="grantArn" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.grantArn"></a>

```typescript
public readonly grantArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of the grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/licensemanager_grant_accepter#grant_arn LicensemanagerGrantAccepter#grant_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/licensemanager_grant_accepter#id LicensemanagerGrantAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.licensemanagerGrantAccepter.LicensemanagerGrantAccepterConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/licensemanager_grant_accepter#region LicensemanagerGrantAccepter#region}

---



