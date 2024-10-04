# `dataAwsOpensearchserverlessSecurityConfig` Submodule <a name="`dataAwsOpensearchserverlessSecurityConfig` Submodule" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchserverlessSecurityConfig <a name="DataAwsOpensearchserverlessSecurityConfig" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/opensearchserverless_security_config aws_opensearchserverless_security_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessSecurityConfig } from '@cdktf/provider-aws'

new dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig(scope: Construct, id: string, config: DataAwsOpensearchserverlessSecurityConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig">DataAwsOpensearchserverlessSecurityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig">DataAwsOpensearchserverlessSecurityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOpensearchserverlessSecurityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isConstruct"></a>

```typescript
import { dataAwsOpensearchserverlessSecurityConfig } from '@cdktf/provider-aws'

dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isTerraformElement"></a>

```typescript
import { dataAwsOpensearchserverlessSecurityConfig } from '@cdktf/provider-aws'

dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsOpensearchserverlessSecurityConfig } from '@cdktf/provider-aws'

dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.generateConfigForImport"></a>

```typescript
import { dataAwsOpensearchserverlessSecurityConfig } from '@cdktf/provider-aws'

dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsOpensearchserverlessSecurityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOpensearchserverlessSecurityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOpensearchserverlessSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOpensearchserverlessSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.configVersion">configVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference">DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configVersion`<sup>Required</sup> <a name="configVersion" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.configVersion"></a>

```typescript
public readonly configVersion: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `samlOptions`<sup>Required</sup> <a name="samlOptions" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.samlOptions"></a>

```typescript
public readonly samlOptions: DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference">DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchserverlessSecurityConfigConfig <a name="DataAwsOpensearchserverlessSecurityConfigConfig" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessSecurityConfig } from '@cdktf/provider-aws'

const dataAwsOpensearchserverlessSecurityConfigConfig: dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/opensearchserverless_security_config#id DataAwsOpensearchserverlessSecurityConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/opensearchserverless_security_config#id DataAwsOpensearchserverlessSecurityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsOpensearchserverlessSecurityConfigSamlOptions <a name="DataAwsOpensearchserverlessSecurityConfigSamlOptions" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptions.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessSecurityConfig } from '@cdktf/provider-aws'

const dataAwsOpensearchserverlessSecurityConfigSamlOptions: dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference <a name="DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessSecurityConfig } from '@cdktf/provider-aws'

new dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute">groupAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute">userAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptions">DataAwsOpensearchserverlessSecurityConfigSamlOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupAttribute`<sup>Required</sup> <a name="groupAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute"></a>

```typescript
public readonly groupAttribute: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `userAttribute`<sup>Required</sup> <a name="userAttribute" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute"></a>

```typescript
public readonly userAttribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsOpensearchserverlessSecurityConfigSamlOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsOpensearchserverlessSecurityConfig.DataAwsOpensearchserverlessSecurityConfigSamlOptions">DataAwsOpensearchserverlessSecurityConfigSamlOptions</a>

---



