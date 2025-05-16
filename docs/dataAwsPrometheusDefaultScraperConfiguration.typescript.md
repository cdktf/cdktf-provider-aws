# `dataAwsPrometheusDefaultScraperConfiguration` Submodule <a name="`dataAwsPrometheusDefaultScraperConfiguration` Submodule" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsPrometheusDefaultScraperConfiguration <a name="DataAwsPrometheusDefaultScraperConfiguration" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/data-sources/prometheus_default_scraper_configuration aws_prometheus_default_scraper_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer"></a>

```typescript
import { dataAwsPrometheusDefaultScraperConfiguration } from '@cdktf/provider-aws'

new dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration(scope: Construct, id: string, config?: DataAwsPrometheusDefaultScraperConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig">DataAwsPrometheusDefaultScraperConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig">DataAwsPrometheusDefaultScraperConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsPrometheusDefaultScraperConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isConstruct"></a>

```typescript
import { dataAwsPrometheusDefaultScraperConfiguration } from '@cdktf/provider-aws'

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsPrometheusDefaultScraperConfiguration } from '@cdktf/provider-aws'

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsPrometheusDefaultScraperConfiguration } from '@cdktf/provider-aws'

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsPrometheusDefaultScraperConfiguration } from '@cdktf/provider-aws'

dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsPrometheusDefaultScraperConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsPrometheusDefaultScraperConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsPrometheusDefaultScraperConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/data-sources/prometheus_default_scraper_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsPrometheusDefaultScraperConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsPrometheusDefaultScraperConfigurationConfig <a name="DataAwsPrometheusDefaultScraperConfigurationConfig" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsPrometheusDefaultScraperConfiguration } from '@cdktf/provider-aws'

const dataAwsPrometheusDefaultScraperConfigurationConfig: dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsPrometheusDefaultScraperConfiguration.DataAwsPrometheusDefaultScraperConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



