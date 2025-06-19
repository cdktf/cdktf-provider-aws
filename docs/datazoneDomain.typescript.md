# `datazoneDomain` Submodule <a name="`datazoneDomain` Submodule" id="@cdktf/provider-aws.datazoneDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneDomain <a name="DatazoneDomain" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain aws_datazone_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

new datazoneDomain.DatazoneDomain(scope: Construct, id: string, config: DatazoneDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig">DatazoneDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig">DatazoneDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putSingleSignOn">putSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetSingleSignOn">resetSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetSkipDeletionCheck">resetSkipDeletionCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSingleSignOn` <a name="putSingleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putSingleSignOn"></a>

```typescript
public putSingleSignOn(value: IResolvable | DatazoneDomainSingleSignOn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putSingleSignOn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: DatazoneDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetKmsKeyIdentifier"></a>

```typescript
public resetKmsKeyIdentifier(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSingleSignOn` <a name="resetSingleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetSingleSignOn"></a>

```typescript
public resetSingleSignOn(): void
```

##### `resetSkipDeletionCheck` <a name="resetSkipDeletionCheck" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetSkipDeletionCheck"></a>

```typescript
public resetSkipDeletionCheck(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isConstruct"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

datazoneDomain.DatazoneDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformElement"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

datazoneDomain.DatazoneDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformResource"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

datazoneDomain.DatazoneDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

datazoneDomain.DatazoneDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatazoneDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.portalUrl">portalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOn">singleSignOn</a></code> | <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList">DatazoneDomainSingleSignOnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference">DatazoneDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRoleInput">domainExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOnInput">singleSignOnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.skipDeletionCheckInput">skipDeletionCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRole">domainExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.skipDeletionCheck">skipDeletionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portalUrl`<sup>Required</sup> <a name="portalUrl" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.portalUrl"></a>

```typescript
public readonly portalUrl: string;
```

- *Type:* string

---

##### `singleSignOn`<sup>Required</sup> <a name="singleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOn"></a>

```typescript
public readonly singleSignOn: DatazoneDomainSingleSignOnList;
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList">DatazoneDomainSingleSignOnList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.timeouts"></a>

```typescript
public readonly timeouts: DatazoneDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference">DatazoneDomainTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainExecutionRoleInput`<sup>Optional</sup> <a name="domainExecutionRoleInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRoleInput"></a>

```typescript
public readonly domainExecutionRoleInput: string;
```

- *Type:* string

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifierInput"></a>

```typescript
public readonly kmsKeyIdentifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `singleSignOnInput`<sup>Optional</sup> <a name="singleSignOnInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOnInput"></a>

```typescript
public readonly singleSignOnInput: IResolvable | DatazoneDomainSingleSignOn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>[]

---

##### `skipDeletionCheckInput`<sup>Optional</sup> <a name="skipDeletionCheckInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.skipDeletionCheckInput"></a>

```typescript
public readonly skipDeletionCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatazoneDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainExecutionRole`<sup>Required</sup> <a name="domainExecutionRole" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRole"></a>

```typescript
public readonly domainExecutionRole: string;
```

- *Type:* string

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `skipDeletionCheck`<sup>Required</sup> <a name="skipDeletionCheck" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.skipDeletionCheck"></a>

```typescript
public readonly skipDeletionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneDomainConfig <a name="DatazoneDomainConfig" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.Initializer"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

const datazoneDomainConfig: datazoneDomain.DatazoneDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.domainExecutionRole">domainExecutionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#name DatazoneDomain#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#description DatazoneDomain#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.singleSignOn">singleSignOn</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>[]</code> | single_sign_on block. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.skipDeletionCheck">skipDeletionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#skip_deletion_check DatazoneDomain#skip_deletion_check}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainExecutionRole`<sup>Required</sup> <a name="domainExecutionRole" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.domainExecutionRole"></a>

```typescript
public readonly domainExecutionRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#name DatazoneDomain#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#description DatazoneDomain#description}.

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#region DatazoneDomain#region}

---

##### `singleSignOn`<sup>Optional</sup> <a name="singleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.singleSignOn"></a>

```typescript
public readonly singleSignOn: IResolvable | DatazoneDomainSingleSignOn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>[]

single_sign_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#single_sign_on DatazoneDomain#single_sign_on}

---

##### `skipDeletionCheck`<sup>Optional</sup> <a name="skipDeletionCheck" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.skipDeletionCheck"></a>

```typescript
public readonly skipDeletionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#skip_deletion_check DatazoneDomain#skip_deletion_check}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatazoneDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#timeouts DatazoneDomain#timeouts}

---

### DatazoneDomainSingleSignOn <a name="DatazoneDomainSingleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.Initializer"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

const datazoneDomainSingleSignOn: datazoneDomain.DatazoneDomainSingleSignOn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#type DatazoneDomain#type}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.userAssignment">userAssignment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#user_assignment DatazoneDomain#user_assignment}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#type DatazoneDomain#type}.

---

##### `userAssignment`<sup>Optional</sup> <a name="userAssignment" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.userAssignment"></a>

```typescript
public readonly userAssignment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#user_assignment DatazoneDomain#user_assignment}.

---

### DatazoneDomainTimeouts <a name="DatazoneDomainTimeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.Initializer"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

const datazoneDomainTimeouts: datazoneDomain.DatazoneDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#create DatazoneDomain#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/datazone_domain#delete DatazoneDomain#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneDomainSingleSignOnList <a name="DatazoneDomainSingleSignOnList" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

new datazoneDomain.DatazoneDomainSingleSignOnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.get"></a>

```typescript
public get(index: number): DatazoneDomainSingleSignOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDomainSingleSignOn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>[]

---


### DatazoneDomainSingleSignOnOutputReference <a name="DatazoneDomainSingleSignOnOutputReference" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

new datazoneDomain.DatazoneDomainSingleSignOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetUserAssignment">resetUserAssignment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUserAssignment` <a name="resetUserAssignment" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetUserAssignment"></a>

```typescript
public resetUserAssignment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignmentInput">userAssignmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignment">userAssignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userAssignmentInput`<sup>Optional</sup> <a name="userAssignmentInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignmentInput"></a>

```typescript
public readonly userAssignmentInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userAssignment`<sup>Required</sup> <a name="userAssignment" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignment"></a>

```typescript
public readonly userAssignment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDomainSingleSignOn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>

---


### DatazoneDomainTimeoutsOutputReference <a name="DatazoneDomainTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { datazoneDomain } from '@cdktf/provider-aws'

new datazoneDomain.DatazoneDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

---



