# `dataAwsSsmMaintenanceWindows` Submodule <a name="`dataAwsSsmMaintenanceWindows` Submodule" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmMaintenanceWindows <a name="DataAwsSsmMaintenanceWindows" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_maintenance_windows aws_ssm_maintenance_windows}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.Initializer"></a>

```typescript
import { dataAwsSsmMaintenanceWindows } from '@cdktf/provider-aws'

new dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows(scope: Construct, id: string, config?: DataAwsSsmMaintenanceWindowsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig">DataAwsSsmMaintenanceWindowsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig">DataAwsSsmMaintenanceWindowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsSsmMaintenanceWindowsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter">DataAwsSsmMaintenanceWindowsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isConstruct"></a>

```typescript
import { dataAwsSsmMaintenanceWindows } from '@cdktf/provider-aws'

dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isTerraformElement"></a>

```typescript
import { dataAwsSsmMaintenanceWindows } from '@cdktf/provider-aws'

dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isTerraformDataSource"></a>

```typescript
import { dataAwsSsmMaintenanceWindows } from '@cdktf/provider-aws'

dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList">DataAwsSsmMaintenanceWindowsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter">DataAwsSsmMaintenanceWindowsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.filter"></a>

```typescript
public readonly filter: DataAwsSsmMaintenanceWindowsFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList">DataAwsSsmMaintenanceWindowsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsSsmMaintenanceWindowsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter">DataAwsSsmMaintenanceWindowsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindows.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmMaintenanceWindowsConfig <a name="DataAwsSsmMaintenanceWindowsConfig" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.Initializer"></a>

```typescript
import { dataAwsSsmMaintenanceWindows } from '@cdktf/provider-aws'

const dataAwsSsmMaintenanceWindowsConfig: dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter">DataAwsSsmMaintenanceWindowsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_maintenance_windows#id DataAwsSsmMaintenanceWindows#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsSsmMaintenanceWindowsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter">DataAwsSsmMaintenanceWindowsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_maintenance_windows#filter DataAwsSsmMaintenanceWindows#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_maintenance_windows#id DataAwsSsmMaintenanceWindows#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsSsmMaintenanceWindowsFilter <a name="DataAwsSsmMaintenanceWindowsFilter" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter.Initializer"></a>

```typescript
import { dataAwsSsmMaintenanceWindows } from '@cdktf/provider-aws'

const dataAwsSsmMaintenanceWindowsFilter: dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_maintenance_windows#name DataAwsSsmMaintenanceWindows#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_maintenance_windows#values DataAwsSsmMaintenanceWindows#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_maintenance_windows#name DataAwsSsmMaintenanceWindows#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_maintenance_windows#values DataAwsSsmMaintenanceWindows#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmMaintenanceWindowsFilterList <a name="DataAwsSsmMaintenanceWindowsFilterList" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.Initializer"></a>

```typescript
import { dataAwsSsmMaintenanceWindows } from '@cdktf/provider-aws'

new dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.get"></a>

```typescript
public get(index: number): DataAwsSsmMaintenanceWindowsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter">DataAwsSsmMaintenanceWindowsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsSsmMaintenanceWindowsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter">DataAwsSsmMaintenanceWindowsFilter</a>[]

---


### DataAwsSsmMaintenanceWindowsFilterOutputReference <a name="DataAwsSsmMaintenanceWindowsFilterOutputReference" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmMaintenanceWindows } from '@cdktf/provider-aws'

new dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter">DataAwsSsmMaintenanceWindowsFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmMaintenanceWindowsFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmMaintenanceWindows.DataAwsSsmMaintenanceWindowsFilter">DataAwsSsmMaintenanceWindowsFilter</a> | cdktf.IResolvable

---



