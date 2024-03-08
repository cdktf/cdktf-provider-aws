# `dataAwsAppintegrationsEventIntegration` Submodule <a name="`dataAwsAppintegrationsEventIntegration` Submodule" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppintegrationsEventIntegration <a name="DataAwsAppintegrationsEventIntegration" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/appintegrations_event_integration aws_appintegrations_event_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer"></a>

```typescript
import { dataAwsAppintegrationsEventIntegration } from '@cdktf/provider-aws'

new dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration(scope: Construct, id: string, config: DataAwsAppintegrationsEventIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig">DataAwsAppintegrationsEventIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig">DataAwsAppintegrationsEventIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAppintegrationsEventIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct"></a>

```typescript
import { dataAwsAppintegrationsEventIntegration } from '@cdktf/provider-aws'

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement"></a>

```typescript
import { dataAwsAppintegrationsEventIntegration } from '@cdktf/provider-aws'

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource"></a>

```typescript
import { dataAwsAppintegrationsEventIntegration } from '@cdktf/provider-aws'

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport"></a>

```typescript
import { dataAwsAppintegrationsEventIntegration } from '@cdktf/provider-aws'

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsAppintegrationsEventIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAppintegrationsEventIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAppintegrationsEventIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/appintegrations_event_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppintegrationsEventIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventbridgeBus">eventbridgeBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList">DataAwsAppintegrationsEventIntegrationEventFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eventbridgeBus`<sup>Required</sup> <a name="eventbridgeBus" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventbridgeBus"></a>

```typescript
public readonly eventbridgeBus: string;
```

- *Type:* string

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventFilter"></a>

```typescript
public readonly eventFilter: DataAwsAppintegrationsEventIntegrationEventFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList">DataAwsAppintegrationsEventIntegrationEventFilterList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppintegrationsEventIntegrationConfig <a name="DataAwsAppintegrationsEventIntegrationConfig" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.Initializer"></a>

```typescript
import { dataAwsAppintegrationsEventIntegration } from '@cdktf/provider-aws'

const dataAwsAppintegrationsEventIntegrationConfig: dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}.

---

### DataAwsAppintegrationsEventIntegrationEventFilter <a name="DataAwsAppintegrationsEventIntegrationEventFilter" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter.Initializer"></a>

```typescript
import { dataAwsAppintegrationsEventIntegration } from '@cdktf/provider-aws'

const dataAwsAppintegrationsEventIntegrationEventFilter: dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppintegrationsEventIntegrationEventFilterList <a name="DataAwsAppintegrationsEventIntegrationEventFilterList" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer"></a>

```typescript
import { dataAwsAppintegrationsEventIntegration } from '@cdktf/provider-aws'

new dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.get"></a>

```typescript
public get(index: number): DataAwsAppintegrationsEventIntegrationEventFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppintegrationsEventIntegrationEventFilterOutputReference <a name="DataAwsAppintegrationsEventIntegrationEventFilterOutputReference" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsAppintegrationsEventIntegration } from '@cdktf/provider-aws'

new dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter">DataAwsAppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppintegrationsEventIntegrationEventFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter">DataAwsAppintegrationsEventIntegrationEventFilter</a>

---



