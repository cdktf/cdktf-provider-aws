# `prometheusScraper` Submodule <a name="`prometheusScraper` Submodule" id="@cdktf/provider-aws.prometheusScraper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusScraper <a name="PrometheusScraper" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper aws_prometheus_scraper}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraper(scope: Construct, id: string, config: PrometheusScraperConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig">PrometheusScraperConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig">PrometheusScraperConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.putDestination"></a>

```typescript
public putDestination(value: IResolvable | PrometheusScraperDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.putDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]

---

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.putSource"></a>

```typescript
public putSource(value: IResolvable | PrometheusScraperSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.putSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.putTimeouts"></a>

```typescript
public putTimeouts(value: PrometheusScraperTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrometheusScraper resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.isConstruct"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

prometheusScraper.PrometheusScraper.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.isTerraformElement"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

prometheusScraper.PrometheusScraper.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.isTerraformResource"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

prometheusScraper.PrometheusScraper.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

prometheusScraper.PrometheusScraper.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrometheusScraper resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrometheusScraper to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrometheusScraper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrometheusScraper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList">PrometheusScraperDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList">PrometheusScraperSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference">PrometheusScraperTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.destinationInput">destinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfigurationInput">scrapeConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.destination"></a>

```typescript
public readonly destination: PrometheusScraperDestinationList;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList">PrometheusScraperDestinationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.source"></a>

```typescript
public readonly source: PrometheusScraperSourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList">PrometheusScraperSourceList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.timeouts"></a>

```typescript
public readonly timeouts: PrometheusScraperTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference">PrometheusScraperTimeoutsOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | PrometheusScraperDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]

---

##### `scrapeConfigurationInput`<sup>Optional</sup> <a name="scrapeConfigurationInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfigurationInput"></a>

```typescript
public readonly scrapeConfigurationInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | PrometheusScraperSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrometheusScraperTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraper.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusScraperConfig <a name="PrometheusScraperConfig" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

const prometheusScraperConfig: prometheusScraper.PrometheusScraperConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.destination">destination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]</code> | destination block. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.source">source</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]</code> | source block. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.scrapeConfiguration"></a>

```typescript
public readonly scrapeConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.destination"></a>

```typescript
public readonly destination: IResolvable | PrometheusScraperDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#destination PrometheusScraper#destination}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.source"></a>

```typescript
public readonly source: IResolvable | PrometheusScraperSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#source PrometheusScraper#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrometheusScraperTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#timeouts PrometheusScraper#timeouts}

---

### PrometheusScraperDestination <a name="PrometheusScraperDestination" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

const prometheusScraperDestination: prometheusScraper.PrometheusScraperDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination.property.amp">amp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]</code> | amp block. |

---

##### `amp`<sup>Optional</sup> <a name="amp" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination.property.amp"></a>

```typescript
public readonly amp: IResolvable | PrometheusScraperDestinationAmp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]

amp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#amp PrometheusScraper#amp}

---

### PrometheusScraperDestinationAmp <a name="PrometheusScraperDestinationAmp" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

const prometheusScraperDestinationAmp: prometheusScraper.PrometheusScraperDestinationAmp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#workspace_arn PrometheusScraper#workspace_arn}. |

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#workspace_arn PrometheusScraper#workspace_arn}.

---

### PrometheusScraperSource <a name="PrometheusScraperSource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

const prometheusScraperSource: prometheusScraper.PrometheusScraperSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource.property.eks">eks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]</code> | eks block. |

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource.property.eks"></a>

```typescript
public readonly eks: IResolvable | PrometheusScraperSourceEks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]

eks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#eks PrometheusScraper#eks}

---

### PrometheusScraperSourceEks <a name="PrometheusScraperSourceEks" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

const prometheusScraperSourceEks: prometheusScraper.PrometheusScraperSourceEks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.clusterArn">clusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#cluster_arn PrometheusScraper#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}. |

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#cluster_arn PrometheusScraper#cluster_arn}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}.

---

### PrometheusScraperTimeouts <a name="PrometheusScraperTimeouts" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

const prometheusScraperTimeouts: prometheusScraper.PrometheusScraperTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#create PrometheusScraper#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/prometheus_scraper#delete PrometheusScraper#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusScraperDestinationAmpList <a name="PrometheusScraperDestinationAmpList" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraperDestinationAmpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.get"></a>

```typescript
public get(index: number): PrometheusScraperDestinationAmpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperDestinationAmp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]

---


### PrometheusScraperDestinationAmpOutputReference <a name="PrometheusScraperDestinationAmpOutputReference" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraperDestinationAmpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArnInput">workspaceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceArnInput`<sup>Optional</sup> <a name="workspaceArnInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArnInput"></a>

```typescript
public readonly workspaceArnInput: string;
```

- *Type:* string

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperDestinationAmp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>

---


### PrometheusScraperDestinationList <a name="PrometheusScraperDestinationList" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraperDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.get"></a>

```typescript
public get(index: number): PrometheusScraperDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]

---


### PrometheusScraperDestinationOutputReference <a name="PrometheusScraperDestinationOutputReference" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraperDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.putAmp">putAmp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resetAmp">resetAmp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmp` <a name="putAmp" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.putAmp"></a>

```typescript
public putAmp(value: IResolvable | PrometheusScraperDestinationAmp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.putAmp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]

---

##### `resetAmp` <a name="resetAmp" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resetAmp"></a>

```typescript
public resetAmp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.amp">amp</a></code> | <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList">PrometheusScraperDestinationAmpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.ampInput">ampInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amp`<sup>Required</sup> <a name="amp" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.amp"></a>

```typescript
public readonly amp: PrometheusScraperDestinationAmpList;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList">PrometheusScraperDestinationAmpList</a>

---

##### `ampInput`<sup>Optional</sup> <a name="ampInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.ampInput"></a>

```typescript
public readonly ampInput: IResolvable | PrometheusScraperDestinationAmp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>

---


### PrometheusScraperSourceEksList <a name="PrometheusScraperSourceEksList" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraperSourceEksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.get"></a>

```typescript
public get(index: number): PrometheusScraperSourceEksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperSourceEks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]

---


### PrometheusScraperSourceEksOutputReference <a name="PrometheusScraperSourceEksOutputReference" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraperSourceEksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperSourceEks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>

---


### PrometheusScraperSourceList <a name="PrometheusScraperSourceList" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraperSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.get"></a>

```typescript
public get(index: number): PrometheusScraperSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]

---


### PrometheusScraperSourceOutputReference <a name="PrometheusScraperSourceOutputReference" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraperSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putEks">putEks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetEks">resetEks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEks` <a name="putEks" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putEks"></a>

```typescript
public putEks(value: IResolvable | PrometheusScraperSourceEks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putEks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]

---

##### `resetEks` <a name="resetEks" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetEks"></a>

```typescript
public resetEks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList">PrometheusScraperSourceEksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eksInput">eksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eks"></a>

```typescript
public readonly eks: PrometheusScraperSourceEksList;
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEksList">PrometheusScraperSourceEksList</a>

---

##### `eksInput`<sup>Optional</sup> <a name="eksInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eksInput"></a>

```typescript
public readonly eksInput: IResolvable | PrometheusScraperSourceEks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>

---


### PrometheusScraperTimeoutsOutputReference <a name="PrometheusScraperTimeoutsOutputReference" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer"></a>

```typescript
import { prometheusScraper } from '@cdktf/provider-aws'

new prometheusScraper.PrometheusScraperTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

---



