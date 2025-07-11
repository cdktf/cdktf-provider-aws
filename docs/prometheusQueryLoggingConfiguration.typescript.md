# `prometheusQueryLoggingConfiguration` Submodule <a name="`prometheusQueryLoggingConfiguration` Submodule" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusQueryLoggingConfiguration <a name="PrometheusQueryLoggingConfiguration" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration aws_prometheus_query_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

new prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration(scope: Construct, id: string, config: PrometheusQueryLoggingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig">PrometheusQueryLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig">PrometheusQueryLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putDestination"></a>

```typescript
public putDestination(value: IResolvable | PrometheusQueryLoggingConfigurationDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: PrometheusQueryLoggingConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrometheusQueryLoggingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrometheusQueryLoggingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrometheusQueryLoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrometheusQueryLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrometheusQueryLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList">PrometheusQueryLoggingConfigurationDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference">PrometheusQueryLoggingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destinationInput">destinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destination"></a>

```typescript
public readonly destination: PrometheusQueryLoggingConfigurationDestinationList;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList">PrometheusQueryLoggingConfigurationDestinationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: PrometheusQueryLoggingConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference">PrometheusQueryLoggingConfigurationTimeoutsOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | PrometheusQueryLoggingConfigurationDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrometheusQueryLoggingConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusQueryLoggingConfigurationConfig <a name="PrometheusQueryLoggingConfigurationConfig" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

const prometheusQueryLoggingConfigurationConfig: prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.destination">destination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>[]</code> | destination block. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.destination"></a>

```typescript
public readonly destination: IResolvable | PrometheusQueryLoggingConfigurationDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#destination PrometheusQueryLoggingConfiguration#destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#region PrometheusQueryLoggingConfiguration#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrometheusQueryLoggingConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#timeouts PrometheusQueryLoggingConfiguration#timeouts}

---

### PrometheusQueryLoggingConfigurationDestination <a name="PrometheusQueryLoggingConfigurationDestination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

const prometheusQueryLoggingConfigurationDestination: prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>[]</code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.filters">filters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>[]</code> | filters block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: IResolvable | PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>[]

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#cloudwatch_logs PrometheusQueryLoggingConfiguration#cloudwatch_logs}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.filters"></a>

```typescript
public readonly filters: IResolvable | PrometheusQueryLoggingConfigurationDestinationFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>[]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#filters PrometheusQueryLoggingConfiguration#filters}

---

### PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs <a name="PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

const prometheusQueryLoggingConfigurationDestinationCloudwatchLogs: prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#log_group_arn PrometheusQueryLoggingConfiguration#log_group_arn}. |

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#log_group_arn PrometheusQueryLoggingConfiguration#log_group_arn}.

---

### PrometheusQueryLoggingConfigurationDestinationFilters <a name="PrometheusQueryLoggingConfigurationDestinationFilters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

const prometheusQueryLoggingConfigurationDestinationFilters: prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters.property.qspThreshold">qspThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#qsp_threshold PrometheusQueryLoggingConfiguration#qsp_threshold}. |

---

##### `qspThreshold`<sup>Required</sup> <a name="qspThreshold" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters.property.qspThreshold"></a>

```typescript
public readonly qspThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#qsp_threshold PrometheusQueryLoggingConfiguration#qsp_threshold}.

---

### PrometheusQueryLoggingConfigurationTimeouts <a name="PrometheusQueryLoggingConfigurationTimeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

const prometheusQueryLoggingConfigurationTimeouts: prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#create PrometheusQueryLoggingConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#delete PrometheusQueryLoggingConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/prometheus_query_logging_configuration#update PrometheusQueryLoggingConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList <a name="PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

new prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.get"></a>

```typescript
public get(index: number): PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>[]

---


### PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference <a name="PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

new prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>

---


### PrometheusQueryLoggingConfigurationDestinationFiltersList <a name="PrometheusQueryLoggingConfigurationDestinationFiltersList" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

new prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.get"></a>

```typescript
public get(index: number): PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusQueryLoggingConfigurationDestinationFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>[]

---


### PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference <a name="PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

new prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThresholdInput">qspThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThreshold">qspThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `qspThresholdInput`<sup>Optional</sup> <a name="qspThresholdInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThresholdInput"></a>

```typescript
public readonly qspThresholdInput: number;
```

- *Type:* number

---

##### `qspThreshold`<sup>Required</sup> <a name="qspThreshold" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThreshold"></a>

```typescript
public readonly qspThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusQueryLoggingConfigurationDestinationFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>

---


### PrometheusQueryLoggingConfigurationDestinationList <a name="PrometheusQueryLoggingConfigurationDestinationList" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

new prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.get"></a>

```typescript
public get(index: number): PrometheusQueryLoggingConfigurationDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusQueryLoggingConfigurationDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>[]

---


### PrometheusQueryLoggingConfigurationDestinationOutputReference <a name="PrometheusQueryLoggingConfigurationDestinationOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

new prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetFilters">resetFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: IResolvable | PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>[]

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putFilters"></a>

```typescript
public putFilters(value: IResolvable | PrometheusQueryLoggingConfigurationDestinationFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>[]

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList">PrometheusQueryLoggingConfigurationDestinationFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filters"></a>

```typescript
public readonly filters: PrometheusQueryLoggingConfigurationDestinationFiltersList;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList">PrometheusQueryLoggingConfigurationDestinationFiltersList</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>[]

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | PrometheusQueryLoggingConfigurationDestinationFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusQueryLoggingConfigurationDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>

---


### PrometheusQueryLoggingConfigurationTimeoutsOutputReference <a name="PrometheusQueryLoggingConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { prometheusQueryLoggingConfiguration } from '@cdktf/provider-aws'

new prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusQueryLoggingConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

---



