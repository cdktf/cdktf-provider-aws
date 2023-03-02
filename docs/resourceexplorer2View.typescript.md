# `resourceexplorer2View` Submodule <a name="`resourceexplorer2View` Submodule" id="@cdktf/provider-aws.resourceexplorer2View"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resourceexplorer2View <a name="Resourceexplorer2View" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view aws_resourceexplorer2_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

new resourceexplorer2View.Resourceexplorer2View(scope: Construct, id: string, config: Resourceexplorer2ViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig">Resourceexplorer2ViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig">Resourceexplorer2ViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty">putIncludedProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetDefaultView">resetDefaultView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperty">resetIncludedProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters"></a>

```typescript
public putFilters(value: IResolvable | Resourceexplorer2ViewFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>[]

---

##### `putIncludedProperty` <a name="putIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty"></a>

```typescript
public putIncludedProperty(value: IResolvable | Resourceexplorer2ViewIncludedProperty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>[]

---

##### `resetDefaultView` <a name="resetDefaultView" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetDefaultView"></a>

```typescript
public resetDefaultView(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetIncludedProperty` <a name="resetIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperty"></a>

```typescript
public resetIncludedProperty(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

resourceexplorer2View.Resourceexplorer2View.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

resourceexplorer2View.Resourceexplorer2View.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

resourceexplorer2View.Resourceexplorer2View.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList">Resourceexplorer2ViewFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedProperty">includedProperty</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList">Resourceexplorer2ViewIncludedPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultViewInput">defaultViewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filtersInput">filtersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedPropertyInput">includedPropertyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultView">defaultView</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filters"></a>

```typescript
public readonly filters: Resourceexplorer2ViewFiltersList;
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList">Resourceexplorer2ViewFiltersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includedProperty`<sup>Required</sup> <a name="includedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedProperty"></a>

```typescript
public readonly includedProperty: Resourceexplorer2ViewIncludedPropertyList;
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList">Resourceexplorer2ViewIncludedPropertyList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `defaultViewInput`<sup>Optional</sup> <a name="defaultViewInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultViewInput"></a>

```typescript
public readonly defaultViewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | Resourceexplorer2ViewFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>[]

---

##### `includedPropertyInput`<sup>Optional</sup> <a name="includedPropertyInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedPropertyInput"></a>

```typescript
public readonly includedPropertyInput: IResolvable | Resourceexplorer2ViewIncludedProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultView`<sup>Required</sup> <a name="defaultView" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultView"></a>

```typescript
public readonly defaultView: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resourceexplorer2ViewConfig <a name="Resourceexplorer2ViewConfig" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.Initializer"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

const resourceexplorer2ViewConfig: resourceexplorer2View.Resourceexplorer2ViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.defaultView">defaultView</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters">filters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>[]</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperty">includedProperty</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>[]</code> | included_property block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

##### `defaultView`<sup>Optional</sup> <a name="defaultView" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.defaultView"></a>

```typescript
public readonly defaultView: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters"></a>

```typescript
public readonly filters: IResolvable | Resourceexplorer2ViewFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>[]

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filters Resourceexplorer2View#filters}

---

##### `includedProperty`<sup>Optional</sup> <a name="includedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperty"></a>

```typescript
public readonly includedProperty: IResolvable | Resourceexplorer2ViewIncludedProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>[]

included_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#included_property Resourceexplorer2View#included_property}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}.

---

### Resourceexplorer2ViewFilters <a name="Resourceexplorer2ViewFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.Initializer"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

const resourceexplorer2ViewFilters: resourceexplorer2View.Resourceexplorer2ViewFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString">filterString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}. |

---

##### `filterString`<sup>Required</sup> <a name="filterString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString"></a>

```typescript
public readonly filterString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}.

---

### Resourceexplorer2ViewIncludedProperty <a name="Resourceexplorer2ViewIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.Initializer"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

const resourceexplorer2ViewIncludedProperty: resourceexplorer2View.Resourceexplorer2ViewIncludedProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resourceexplorer2ViewFiltersList <a name="Resourceexplorer2ViewFiltersList" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

new resourceexplorer2View.Resourceexplorer2ViewFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get"></a>

```typescript
public get(index: number): Resourceexplorer2ViewFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resourceexplorer2ViewFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>[]

---


### Resourceexplorer2ViewFiltersOutputReference <a name="Resourceexplorer2ViewFiltersOutputReference" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

new resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput">filterStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString">filterString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterStringInput`<sup>Optional</sup> <a name="filterStringInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput"></a>

```typescript
public readonly filterStringInput: string;
```

- *Type:* string

---

##### `filterString`<sup>Required</sup> <a name="filterString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString"></a>

```typescript
public readonly filterString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resourceexplorer2ViewFilters | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a> | cdktf.IResolvable

---


### Resourceexplorer2ViewIncludedPropertyList <a name="Resourceexplorer2ViewIncludedPropertyList" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

new resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get"></a>

```typescript
public get(index: number): Resourceexplorer2ViewIncludedPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resourceexplorer2ViewIncludedProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a>[]

---


### Resourceexplorer2ViewIncludedPropertyOutputReference <a name="Resourceexplorer2ViewIncludedPropertyOutputReference" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer"></a>

```typescript
import { resourceexplorer2View } from '@cdktf/provider-aws'

new resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resourceexplorer2ViewIncludedProperty | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty">Resourceexplorer2ViewIncludedProperty</a> | cdktf.IResolvable

---



