# `dataAwsNetworkmanagerLinks` Submodule <a name="`dataAwsNetworkmanagerLinks` Submodule" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkmanagerLinks <a name="DataAwsNetworkmanagerLinks" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links aws_networkmanager_links}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.Initializer"></a>

```typescript
import { dataAwsNetworkmanagerLinks } from '@cdktf/provider-aws'

new dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks(scope: Construct, id: string, config: DataAwsNetworkmanagerLinksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig">DataAwsNetworkmanagerLinksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig">DataAwsNetworkmanagerLinksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetSiteId">resetSiteId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetProviderName"></a>

```typescript
public resetProviderName(): void
```

##### `resetSiteId` <a name="resetSiteId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetSiteId"></a>

```typescript
public resetSiteId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsNetworkmanagerLinks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isConstruct"></a>

```typescript
import { dataAwsNetworkmanagerLinks } from '@cdktf/provider-aws'

dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isTerraformElement"></a>

```typescript
import { dataAwsNetworkmanagerLinks } from '@cdktf/provider-aws'

dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isTerraformDataSource"></a>

```typescript
import { dataAwsNetworkmanagerLinks } from '@cdktf/provider-aws'

dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.generateConfigForImport"></a>

```typescript
import { dataAwsNetworkmanagerLinks } from '@cdktf/provider-aws'

dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsNetworkmanagerLinks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsNetworkmanagerLinks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsNetworkmanagerLinks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsNetworkmanagerLinks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.globalNetworkIdInput"></a>

```typescript
public readonly globalNetworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkmanagerLinksConfig <a name="DataAwsNetworkmanagerLinksConfig" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.Initializer"></a>

```typescript
import { dataAwsNetworkmanagerLinks } from '@cdktf/provider-aws'

const dataAwsNetworkmanagerLinksConfig: dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#global_network_id DataAwsNetworkmanagerLinks#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#id DataAwsNetworkmanagerLinks#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#provider_name DataAwsNetworkmanagerLinks#provider_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.siteId">siteId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#site_id DataAwsNetworkmanagerLinks#site_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#tags DataAwsNetworkmanagerLinks#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#type DataAwsNetworkmanagerLinks#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#global_network_id DataAwsNetworkmanagerLinks#global_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#id DataAwsNetworkmanagerLinks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#provider_name DataAwsNetworkmanagerLinks#provider_name}.

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#site_id DataAwsNetworkmanagerLinks#site_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#tags DataAwsNetworkmanagerLinks#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.dataAwsNetworkmanagerLinks.DataAwsNetworkmanagerLinksConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkmanager_links#type DataAwsNetworkmanagerLinks#type}.

---



