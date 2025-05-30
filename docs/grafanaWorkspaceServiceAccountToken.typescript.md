# `grafanaWorkspaceServiceAccountToken` Submodule <a name="`grafanaWorkspaceServiceAccountToken` Submodule" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceServiceAccountToken <a name="GrafanaWorkspaceServiceAccountToken" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token aws_grafana_workspace_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer"></a>

```typescript
import { grafanaWorkspaceServiceAccountToken } from '@cdktf/provider-aws'

new grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken(scope: Construct, id: string, config: GrafanaWorkspaceServiceAccountTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig">GrafanaWorkspaceServiceAccountTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig">GrafanaWorkspaceServiceAccountTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct"></a>

```typescript
import { grafanaWorkspaceServiceAccountToken } from '@cdktf/provider-aws'

grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement"></a>

```typescript
import { grafanaWorkspaceServiceAccountToken } from '@cdktf/provider-aws'

grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource"></a>

```typescript
import { grafanaWorkspaceServiceAccountToken } from '@cdktf/provider-aws'

grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport"></a>

```typescript
import { grafanaWorkspaceServiceAccountToken } from '@cdktf/provider-aws'

grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrafanaWorkspaceServiceAccountToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrafanaWorkspaceServiceAccountToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GrafanaWorkspaceServiceAccountToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountTokenId">serviceAccountTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLiveInput">secondsToLiveInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLive">secondsToLive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `serviceAccountTokenId`<sup>Required</sup> <a name="serviceAccountTokenId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountTokenId"></a>

```typescript
public readonly serviceAccountTokenId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secondsToLiveInput`<sup>Optional</sup> <a name="secondsToLiveInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLiveInput"></a>

```typescript
public readonly secondsToLiveInput: number;
```

- *Type:* number

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountIdInput"></a>

```typescript
public readonly serviceAccountIdInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLive"></a>

```typescript
public readonly secondsToLive: number;
```

- *Type:* number

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceServiceAccountTokenConfig <a name="GrafanaWorkspaceServiceAccountTokenConfig" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.Initializer"></a>

```typescript
import { grafanaWorkspaceServiceAccountToken } from '@cdktf/provider-aws'

const grafanaWorkspaceServiceAccountTokenConfig: grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.secondsToLive">secondsToLive</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}.

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.secondsToLive"></a>

```typescript
public readonly secondsToLive: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}.

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}.

---



