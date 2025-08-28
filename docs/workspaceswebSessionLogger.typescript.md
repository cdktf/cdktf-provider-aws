# `workspaceswebSessionLogger` Submodule <a name="`workspaceswebSessionLogger` Submodule" id="@cdktf/provider-aws.workspaceswebSessionLogger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebSessionLogger <a name="WorkspaceswebSessionLogger" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger aws_workspacesweb_session_logger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

new workspaceswebSessionLogger.WorkspaceswebSessionLogger(scope: Construct, id: string, config?: WorkspaceswebSessionLoggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig">WorkspaceswebSessionLoggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig">WorkspaceswebSessionLoggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter">putEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetEventFilter">resetEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventFilter` <a name="putEventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter"></a>

```typescript
public putEventFilter(value: IResolvable | WorkspaceswebSessionLoggerEventFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>[]

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration"></a>

```typescript
public putLogConfiguration(value: IResolvable | WorkspaceswebSessionLoggerLogConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>[]

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetAdditionalEncryptionContext"></a>

```typescript
public resetAdditionalEncryptionContext(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEventFilter` <a name="resetEventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetEventFilter"></a>

```typescript
public resetEventFilter(): void
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetLogConfiguration"></a>

```typescript
public resetLogConfiguration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebSessionLogger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkspaceswebSessionLogger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebSessionLogger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebSessionLogger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebSessionLogger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.associatedPortalArns">associatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList">WorkspaceswebSessionLoggerEventFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList">WorkspaceswebSessionLoggerLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.sessionLoggerArn">sessionLoggerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilterInput">eventFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfigurationInput">logConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.associatedPortalArns"></a>

```typescript
public readonly associatedPortalArns: string[];
```

- *Type:* string[]

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilter"></a>

```typescript
public readonly eventFilter: WorkspaceswebSessionLoggerEventFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList">WorkspaceswebSessionLoggerEventFilterList</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: WorkspaceswebSessionLoggerLogConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList">WorkspaceswebSessionLoggerLogConfigurationList</a>

---

##### `sessionLoggerArn`<sup>Required</sup> <a name="sessionLoggerArn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.sessionLoggerArn"></a>

```typescript
public readonly sessionLoggerArn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContextInput"></a>

```typescript
public readonly additionalEncryptionContextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `eventFilterInput`<sup>Optional</sup> <a name="eventFilterInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilterInput"></a>

```typescript
public readonly eventFilterInput: IResolvable | WorkspaceswebSessionLoggerEventFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>[]

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfigurationInput"></a>

```typescript
public readonly logConfigurationInput: IResolvable | WorkspaceswebSessionLoggerLogConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebSessionLoggerConfig <a name="WorkspaceswebSessionLoggerConfig" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

const workspaceswebSessionLoggerConfig: workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.eventFilter">eventFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>[]</code> | event_filter block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.logConfiguration">logConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>[]</code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}.

---

##### `eventFilter`<sup>Optional</sup> <a name="eventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.eventFilter"></a>

```typescript
public readonly eventFilter: IResolvable | WorkspaceswebSessionLoggerEventFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>[]

event_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#event_filter WorkspaceswebSessionLogger#event_filter}

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: IResolvable | WorkspaceswebSessionLoggerLogConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>[]

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#log_configuration WorkspaceswebSessionLogger#log_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#region WorkspaceswebSessionLogger#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}.

---

### WorkspaceswebSessionLoggerEventFilter <a name="WorkspaceswebSessionLoggerEventFilter" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

const workspaceswebSessionLoggerEventFilter: workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.all">all</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll">WorkspaceswebSessionLoggerEventFilterAll</a>[]</code> | all block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.include">include</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#include WorkspaceswebSessionLogger#include}. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.all"></a>

```typescript
public readonly all: IResolvable | WorkspaceswebSessionLoggerEventFilterAll[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll">WorkspaceswebSessionLoggerEventFilterAll</a>[]

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#all WorkspaceswebSessionLogger#all}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#include WorkspaceswebSessionLogger#include}.

---

### WorkspaceswebSessionLoggerEventFilterAll <a name="WorkspaceswebSessionLoggerEventFilterAll" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

const workspaceswebSessionLoggerEventFilterAll: workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll = { ... }
```


### WorkspaceswebSessionLoggerLogConfiguration <a name="WorkspaceswebSessionLoggerLogConfiguration" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

const workspaceswebSessionLoggerLogConfiguration: workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.property.s3">s3</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>[]</code> | s3 block. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.property.s3"></a>

```typescript
public readonly s3: IResolvable | WorkspaceswebSessionLoggerLogConfigurationS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>[]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#s3 WorkspaceswebSessionLogger#s3}

---

### WorkspaceswebSessionLoggerLogConfigurationS3 <a name="WorkspaceswebSessionLoggerLogConfigurationS3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

const workspaceswebSessionLoggerLogConfigurationS3: workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#bucket WorkspaceswebSessionLogger#bucket}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.folderStructure">folderStructure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#folder_structure WorkspaceswebSessionLogger#folder_structure}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.logFileFormat">logFileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#log_file_format WorkspaceswebSessionLogger#log_file_format}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#bucket_owner WorkspaceswebSessionLogger#bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#key_prefix WorkspaceswebSessionLogger#key_prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#bucket WorkspaceswebSessionLogger#bucket}.

---

##### `folderStructure`<sup>Required</sup> <a name="folderStructure" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.folderStructure"></a>

```typescript
public readonly folderStructure: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#folder_structure WorkspaceswebSessionLogger#folder_structure}.

---

##### `logFileFormat`<sup>Required</sup> <a name="logFileFormat" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.logFileFormat"></a>

```typescript
public readonly logFileFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#log_file_format WorkspaceswebSessionLogger#log_file_format}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#bucket_owner WorkspaceswebSessionLogger#bucket_owner}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_session_logger#key_prefix WorkspaceswebSessionLogger#key_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebSessionLoggerEventFilterAllList <a name="WorkspaceswebSessionLoggerEventFilterAllList" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

new workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.get"></a>

```typescript
public get(index: number): WorkspaceswebSessionLoggerEventFilterAllOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll">WorkspaceswebSessionLoggerEventFilterAll</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebSessionLoggerEventFilterAll[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll">WorkspaceswebSessionLoggerEventFilterAll</a>[]

---


### WorkspaceswebSessionLoggerEventFilterAllOutputReference <a name="WorkspaceswebSessionLoggerEventFilterAllOutputReference" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

new workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll">WorkspaceswebSessionLoggerEventFilterAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebSessionLoggerEventFilterAll;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll">WorkspaceswebSessionLoggerEventFilterAll</a>

---


### WorkspaceswebSessionLoggerEventFilterList <a name="WorkspaceswebSessionLoggerEventFilterList" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

new workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.get"></a>

```typescript
public get(index: number): WorkspaceswebSessionLoggerEventFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebSessionLoggerEventFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>[]

---


### WorkspaceswebSessionLoggerEventFilterOutputReference <a name="WorkspaceswebSessionLoggerEventFilterOutputReference" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

new workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.putAll">putAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAll` <a name="putAll" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.putAll"></a>

```typescript
public putAll(value: IResolvable | WorkspaceswebSessionLoggerEventFilterAll[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.putAll.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll">WorkspaceswebSessionLoggerEventFilterAll</a>[]

---

##### `resetAll` <a name="resetAll" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.all">all</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList">WorkspaceswebSessionLoggerEventFilterAllList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.allInput">allInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll">WorkspaceswebSessionLoggerEventFilterAll</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.all"></a>

```typescript
public readonly all: WorkspaceswebSessionLoggerEventFilterAllList;
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAllList">WorkspaceswebSessionLoggerEventFilterAllList</a>

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.allInput"></a>

```typescript
public readonly allInput: IResolvable | WorkspaceswebSessionLoggerEventFilterAll[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterAll">WorkspaceswebSessionLoggerEventFilterAll</a>[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebSessionLoggerEventFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

---


### WorkspaceswebSessionLoggerLogConfigurationList <a name="WorkspaceswebSessionLoggerLogConfigurationList" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

new workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.get"></a>

```typescript
public get(index: number): WorkspaceswebSessionLoggerLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebSessionLoggerLogConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>[]

---


### WorkspaceswebSessionLoggerLogConfigurationOutputReference <a name="WorkspaceswebSessionLoggerLogConfigurationOutputReference" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

new workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3"></a>

```typescript
public putS3(value: IResolvable | WorkspaceswebSessionLoggerLogConfigurationS3[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>[]

---

##### `resetS3` <a name="resetS3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List">WorkspaceswebSessionLoggerLogConfigurationS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3Input">s3Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3"></a>

```typescript
public readonly s3: WorkspaceswebSessionLoggerLogConfigurationS3List;
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List">WorkspaceswebSessionLoggerLogConfigurationS3List</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | WorkspaceswebSessionLoggerLogConfigurationS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebSessionLoggerLogConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

---


### WorkspaceswebSessionLoggerLogConfigurationS3List <a name="WorkspaceswebSessionLoggerLogConfigurationS3List" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

new workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.get"></a>

```typescript
public get(index: number): WorkspaceswebSessionLoggerLogConfigurationS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3List.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebSessionLoggerLogConfigurationS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>[]

---


### WorkspaceswebSessionLoggerLogConfigurationS3OutputReference <a name="WorkspaceswebSessionLoggerLogConfigurationS3OutputReference" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer"></a>

```typescript
import { workspaceswebSessionLogger } from '@cdktf/provider-aws'

new workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructureInput">folderStructureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormatInput">logFileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructure">folderStructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormat">logFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `folderStructureInput`<sup>Optional</sup> <a name="folderStructureInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructureInput"></a>

```typescript
public readonly folderStructureInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `logFileFormatInput`<sup>Optional</sup> <a name="logFileFormatInput" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormatInput"></a>

```typescript
public readonly logFileFormatInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `folderStructure`<sup>Required</sup> <a name="folderStructure" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructure"></a>

```typescript
public readonly folderStructure: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `logFileFormat`<sup>Required</sup> <a name="logFileFormat" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormat"></a>

```typescript
public readonly logFileFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebSessionLoggerLogConfigurationS3;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>

---



