# `dataAwsServicecatalogLaunchPaths` Submodule <a name="`dataAwsServicecatalogLaunchPaths` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogLaunchPaths <a name="DataAwsServicecatalogLaunchPaths" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths aws_servicecatalog_launch_paths}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths(scope: Construct, id: string, config: DataAwsServicecatalogLaunchPathsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig">DataAwsServicecatalogLaunchPathsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig">DataAwsServicecatalogLaunchPathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsServicecatalogLaunchPathsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.summaries">summaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList">DataAwsServicecatalogLaunchPathsSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference">DataAwsServicecatalogLaunchPathsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productId">productId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `summaries`<sup>Required</sup> <a name="summaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.summaries"></a>

```typescript
public readonly summaries: DataAwsServicecatalogLaunchPathsSummariesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList">DataAwsServicecatalogLaunchPathsSummariesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsServicecatalogLaunchPathsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference">DataAwsServicecatalogLaunchPathsTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsServicecatalogLaunchPathsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a> | cdktf.IResolvable

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogLaunchPathsConfig <a name="DataAwsServicecatalogLaunchPathsConfig" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

const dataAwsServicecatalogLaunchPathsConfig: dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsServicecatalogLaunchPathsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#timeouts DataAwsServicecatalogLaunchPaths#timeouts}

---

### DataAwsServicecatalogLaunchPathsSummaries <a name="DataAwsServicecatalogLaunchPathsSummaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

const dataAwsServicecatalogLaunchPathsSummaries: dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries = { ... }
```


### DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

const dataAwsServicecatalogLaunchPathsSummariesConstraintSummaries: dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries = { ... }
```


### DataAwsServicecatalogLaunchPathsTimeouts <a name="DataAwsServicecatalogLaunchPathsTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

const dataAwsServicecatalogLaunchPathsTimeouts: dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#read DataAwsServicecatalogLaunchPaths#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#read DataAwsServicecatalogLaunchPaths#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get"></a>

```typescript
public get(index: number): DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries">DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries">DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries</a>

---


### DataAwsServicecatalogLaunchPathsSummariesList <a name="DataAwsServicecatalogLaunchPathsSummariesList" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get"></a>

```typescript
public get(index: number): DataAwsServicecatalogLaunchPathsSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsServicecatalogLaunchPathsSummariesOutputReference <a name="DataAwsServicecatalogLaunchPathsSummariesOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.constraintSummaries">constraintSummaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList">DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.pathId">pathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries">DataAwsServicecatalogLaunchPathsSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintSummaries`<sup>Required</sup> <a name="constraintSummaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.constraintSummaries"></a>

```typescript
public readonly constraintSummaries: DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList">DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pathId`<sup>Required</sup> <a name="pathId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.pathId"></a>

```typescript
public readonly pathId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsServicecatalogLaunchPathsSummaries;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries">DataAwsServicecatalogLaunchPathsSummaries</a>

---


### DataAwsServicecatalogLaunchPathsTimeoutsOutputReference <a name="DataAwsServicecatalogLaunchPathsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/provider-aws'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsServicecatalogLaunchPathsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a> | cdktf.IResolvable

---



