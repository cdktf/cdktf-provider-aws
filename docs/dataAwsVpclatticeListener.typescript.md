# `dataAwsVpclatticeListener` Submodule <a name="`dataAwsVpclatticeListener` Submodule" id="@cdktf/provider-aws.dataAwsVpclatticeListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpclatticeListener <a name="DataAwsVpclatticeListener" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener aws_vpclattice_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

new dataAwsVpclatticeListener.DataAwsVpclatticeListener(scope: Construct, id: string, config: DataAwsVpclatticeListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig">DataAwsVpclatticeListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig">DataAwsVpclatticeListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpclatticeListener resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isConstruct"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

dataAwsVpclatticeListener.DataAwsVpclatticeListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformElement"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformDataSource"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsVpclatticeListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpclatticeListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpclatticeListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpclatticeListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList">DataAwsVpclatticeListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerId">listenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceArn">serviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerIdentifierInput">listenerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerIdentifier">listenerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.defaultAction"></a>

```typescript
public readonly defaultAction: DataAwsVpclatticeListenerDefaultActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList">DataAwsVpclatticeListenerDefaultActionList</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenerIdentifierInput`<sup>Optional</sup> <a name="listenerIdentifierInput" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerIdentifierInput"></a>

```typescript
public readonly listenerIdentifierInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceIdentifierInput"></a>

```typescript
public readonly serviceIdentifierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerIdentifier`<sup>Required</sup> <a name="listenerIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerIdentifier"></a>

```typescript
public readonly listenerIdentifier: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpclatticeListenerConfig <a name="DataAwsVpclatticeListenerConfig" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

const dataAwsVpclatticeListenerConfig: dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.listenerIdentifier">listenerIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#listener_identifier DataAwsVpclatticeListener#listener_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#service_identifier DataAwsVpclatticeListener#service_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#id DataAwsVpclatticeListener#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#tags DataAwsVpclatticeListener#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `listenerIdentifier`<sup>Required</sup> <a name="listenerIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.listenerIdentifier"></a>

```typescript
public readonly listenerIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#listener_identifier DataAwsVpclatticeListener#listener_identifier}.

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#service_identifier DataAwsVpclatticeListener#service_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#id DataAwsVpclatticeListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#region DataAwsVpclatticeListener#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/vpclattice_listener#tags DataAwsVpclatticeListener#tags}.

---

### DataAwsVpclatticeListenerDefaultAction <a name="DataAwsVpclatticeListenerDefaultAction" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultAction.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

const dataAwsVpclatticeListenerDefaultAction: dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultAction = { ... }
```


### DataAwsVpclatticeListenerDefaultActionFixedResponse <a name="DataAwsVpclatticeListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponse.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

const dataAwsVpclatticeListenerDefaultActionFixedResponse: dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponse = { ... }
```


### DataAwsVpclatticeListenerDefaultActionForward <a name="DataAwsVpclatticeListenerDefaultActionForward" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForward.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

const dataAwsVpclatticeListenerDefaultActionForward: dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForward = { ... }
```


### DataAwsVpclatticeListenerDefaultActionForwardTargetGroups <a name="DataAwsVpclatticeListenerDefaultActionForwardTargetGroups" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

const dataAwsVpclatticeListenerDefaultActionForwardTargetGroups: dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpclatticeListenerDefaultActionFixedResponseList <a name="DataAwsVpclatticeListenerDefaultActionFixedResponseList" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

new dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.get"></a>

```typescript
public get(index: number): DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference <a name="DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

new dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponse">DataAwsVpclatticeListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpclatticeListenerDefaultActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponse">DataAwsVpclatticeListenerDefaultActionFixedResponse</a>

---


### DataAwsVpclatticeListenerDefaultActionForwardList <a name="DataAwsVpclatticeListenerDefaultActionForwardList" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

new dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.get"></a>

```typescript
public get(index: number): DataAwsVpclatticeListenerDefaultActionForwardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpclatticeListenerDefaultActionForwardOutputReference <a name="DataAwsVpclatticeListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

new dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList">DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForward">DataAwsVpclatticeListenerDefaultActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups"></a>

```typescript
public readonly targetGroups: DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList">DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpclatticeListenerDefaultActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForward">DataAwsVpclatticeListenerDefaultActionForward</a>

---


### DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList <a name="DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

new dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.get"></a>

```typescript
public get(index: number): DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference <a name="DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

new dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups">DataAwsVpclatticeListenerDefaultActionForwardTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```typescript
public readonly targetGroupIdentifier: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpclatticeListenerDefaultActionForwardTargetGroups;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups">DataAwsVpclatticeListenerDefaultActionForwardTargetGroups</a>

---


### DataAwsVpclatticeListenerDefaultActionList <a name="DataAwsVpclatticeListenerDefaultActionList" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

new dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.get"></a>

```typescript
public get(index: number): DataAwsVpclatticeListenerDefaultActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpclatticeListenerDefaultActionOutputReference <a name="DataAwsVpclatticeListenerDefaultActionOutputReference" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer"></a>

```typescript
import { dataAwsVpclatticeListener } from '@cdktf/provider-aws'

new dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList">DataAwsVpclatticeListenerDefaultActionFixedResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList">DataAwsVpclatticeListenerDefaultActionForwardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultAction">DataAwsVpclatticeListenerDefaultAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: DataAwsVpclatticeListenerDefaultActionFixedResponseList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList">DataAwsVpclatticeListenerDefaultActionFixedResponseList</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.forward"></a>

```typescript
public readonly forward: DataAwsVpclatticeListenerDefaultActionForwardList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList">DataAwsVpclatticeListenerDefaultActionForwardList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpclatticeListenerDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultAction">DataAwsVpclatticeListenerDefaultAction</a>

---



