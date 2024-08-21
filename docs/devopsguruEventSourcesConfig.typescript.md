# `devopsguruEventSourcesConfig` Submodule <a name="`devopsguruEventSourcesConfig` Submodule" id="@cdktf/provider-aws.devopsguruEventSourcesConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruEventSourcesConfig <a name="DevopsguruEventSourcesConfig" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/devopsguru_event_sources_config aws_devopsguru_event_sources_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.Initializer"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

new devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig(scope: Construct, id: string, config?: DevopsguruEventSourcesConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig">DevopsguruEventSourcesConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig">DevopsguruEventSourcesConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.putEventSources">putEventSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.resetEventSources">resetEventSources</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventSources` <a name="putEventSources" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.putEventSources"></a>

```typescript
public putEventSources(value: IResolvable | DevopsguruEventSourcesConfigEventSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.putEventSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources">DevopsguruEventSourcesConfigEventSources</a>[]

---

##### `resetEventSources` <a name="resetEventSources" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.resetEventSources"></a>

```typescript
public resetEventSources(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsguruEventSourcesConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isConstruct"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isTerraformElement"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isTerraformResource"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.generateConfigForImport"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevopsguruEventSourcesConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsguruEventSourcesConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsguruEventSourcesConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/devopsguru_event_sources_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsguruEventSourcesConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.eventSources">eventSources</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList">DevopsguruEventSourcesConfigEventSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.eventSourcesInput">eventSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources">DevopsguruEventSourcesConfigEventSources</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventSources`<sup>Required</sup> <a name="eventSources" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.eventSources"></a>

```typescript
public readonly eventSources: DevopsguruEventSourcesConfigEventSourcesList;
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList">DevopsguruEventSourcesConfigEventSourcesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `eventSourcesInput`<sup>Optional</sup> <a name="eventSourcesInput" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.eventSourcesInput"></a>

```typescript
public readonly eventSourcesInput: IResolvable | DevopsguruEventSourcesConfigEventSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources">DevopsguruEventSourcesConfigEventSources</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruEventSourcesConfigConfig <a name="DevopsguruEventSourcesConfigConfig" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.Initializer"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

const devopsguruEventSourcesConfigConfig: devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.eventSources">eventSources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources">DevopsguruEventSourcesConfigEventSources</a>[]</code> | event_sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventSources`<sup>Optional</sup> <a name="eventSources" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigConfig.property.eventSources"></a>

```typescript
public readonly eventSources: IResolvable | DevopsguruEventSourcesConfigEventSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources">DevopsguruEventSourcesConfigEventSources</a>[]

event_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/devopsguru_event_sources_config#event_sources DevopsguruEventSourcesConfig#event_sources}

---

### DevopsguruEventSourcesConfigEventSources <a name="DevopsguruEventSourcesConfigEventSources" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources.Initializer"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

const devopsguruEventSourcesConfigEventSources: devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources.property.amazonCodeGuruProfiler">amazonCodeGuruProfiler</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler</a>[]</code> | amazon_code_guru_profiler block. |

---

##### `amazonCodeGuruProfiler`<sup>Optional</sup> <a name="amazonCodeGuruProfiler" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources.property.amazonCodeGuruProfiler"></a>

```typescript
public readonly amazonCodeGuruProfiler: IResolvable | DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler</a>[]

amazon_code_guru_profiler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/devopsguru_event_sources_config#amazon_code_guru_profiler DevopsguruEventSourcesConfig#amazon_code_guru_profiler}

---

### DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler <a name="DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler.Initializer"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

const devopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler: devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/devopsguru_event_sources_config#status DevopsguruEventSourcesConfig#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/devopsguru_event_sources_config#status DevopsguruEventSourcesConfig#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList <a name="DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.Initializer"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

new devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.get"></a>

```typescript
public get(index: number): DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler</a>[]

---


### DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference <a name="DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.Initializer"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

new devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler</a>

---


### DevopsguruEventSourcesConfigEventSourcesList <a name="DevopsguruEventSourcesConfigEventSourcesList" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.Initializer"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

new devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.get"></a>

```typescript
public get(index: number): DevopsguruEventSourcesConfigEventSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources">DevopsguruEventSourcesConfigEventSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruEventSourcesConfigEventSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources">DevopsguruEventSourcesConfigEventSources</a>[]

---


### DevopsguruEventSourcesConfigEventSourcesOutputReference <a name="DevopsguruEventSourcesConfigEventSourcesOutputReference" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.Initializer"></a>

```typescript
import { devopsguruEventSourcesConfig } from '@cdktf/provider-aws'

new devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.putAmazonCodeGuruProfiler">putAmazonCodeGuruProfiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.resetAmazonCodeGuruProfiler">resetAmazonCodeGuruProfiler</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonCodeGuruProfiler` <a name="putAmazonCodeGuruProfiler" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.putAmazonCodeGuruProfiler"></a>

```typescript
public putAmazonCodeGuruProfiler(value: IResolvable | DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.putAmazonCodeGuruProfiler.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler</a>[]

---

##### `resetAmazonCodeGuruProfiler` <a name="resetAmazonCodeGuruProfiler" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.resetAmazonCodeGuruProfiler"></a>

```typescript
public resetAmazonCodeGuruProfiler(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.amazonCodeGuruProfiler">amazonCodeGuruProfiler</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.amazonCodeGuruProfilerInput">amazonCodeGuruProfilerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources">DevopsguruEventSourcesConfigEventSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonCodeGuruProfiler`<sup>Required</sup> <a name="amazonCodeGuruProfiler" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.amazonCodeGuruProfiler"></a>

```typescript
public readonly amazonCodeGuruProfiler: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList;
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList</a>

---

##### `amazonCodeGuruProfilerInput`<sup>Optional</sup> <a name="amazonCodeGuruProfilerInput" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.amazonCodeGuruProfilerInput"></a>

```typescript
public readonly amazonCodeGuruProfilerInput: IResolvable | DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler">DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruEventSourcesConfigEventSources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruEventSourcesConfig.DevopsguruEventSourcesConfigEventSources">DevopsguruEventSourcesConfigEventSources</a>

---



