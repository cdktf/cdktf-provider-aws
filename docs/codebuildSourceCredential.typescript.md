# `codebuildSourceCredential` Submodule <a name="`codebuildSourceCredential` Submodule" id="@cdktf/provider-aws.codebuildSourceCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildSourceCredential <a name="CodebuildSourceCredential" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential aws_codebuild_source_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/provider-aws'

new codebuildSourceCredential.CodebuildSourceCredential(scope: Construct, id: string, config: CodebuildSourceCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig">CodebuildSourceCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig">CodebuildSourceCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.resetUserName"></a>

```typescript
public resetUserName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodebuildSourceCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isConstruct"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/provider-aws'

codebuildSourceCredential.CodebuildSourceCredential.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/provider-aws'

codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/provider-aws'

codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/provider-aws'

codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CodebuildSourceCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodebuildSourceCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodebuildSourceCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodebuildSourceCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.serverTypeInput">serverTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.serverType">serverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serverTypeInput`<sup>Optional</sup> <a name="serverTypeInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.serverTypeInput"></a>

```typescript
public readonly serverTypeInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.serverType"></a>

```typescript
public readonly serverType: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredential.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildSourceCredentialConfig <a name="CodebuildSourceCredentialConfig" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.Initializer"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/provider-aws'

const codebuildSourceCredentialConfig: codebuildSourceCredential.CodebuildSourceCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.serverType">serverType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#token CodebuildSourceCredential#token}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#id CodebuildSourceCredential#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}.

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.serverType"></a>

```typescript
public readonly serverType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}.

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#token CodebuildSourceCredential#token}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#id CodebuildSourceCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#region CodebuildSourceCredential#region}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}.

---



