# `dataAwsSsmincidentsResponsePlan` Submodule <a name="`dataAwsSsmincidentsResponsePlan` Submodule" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmincidentsResponsePlan <a name="DataAwsSsmincidentsResponsePlan" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ssmincidents_response_plan aws_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan(scope: Construct, id: string, config: DataAwsSsmincidentsResponsePlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig">DataAwsSsmincidentsResponsePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig">DataAwsSsmincidentsResponsePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isConstruct"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformElement"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformDataSource"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsmincidentsResponsePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList">DataAwsSsmincidentsResponsePlanActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.chatChannel">chatChannel</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.engagements">engagements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.incidentTemplate">incidentTemplate</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList">DataAwsSsmincidentsResponsePlanIncidentTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.integration">integration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList">DataAwsSsmincidentsResponsePlanIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.action"></a>

```typescript
public readonly action: DataAwsSsmincidentsResponsePlanActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList">DataAwsSsmincidentsResponsePlanActionList</a>

---

##### `chatChannel`<sup>Required</sup> <a name="chatChannel" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.chatChannel"></a>

```typescript
public readonly chatChannel: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `engagements`<sup>Required</sup> <a name="engagements" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.engagements"></a>

```typescript
public readonly engagements: string[];
```

- *Type:* string[]

---

##### `incidentTemplate`<sup>Required</sup> <a name="incidentTemplate" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.incidentTemplate"></a>

```typescript
public readonly incidentTemplate: DataAwsSsmincidentsResponsePlanIncidentTemplateList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList">DataAwsSsmincidentsResponsePlanIncidentTemplateList</a>

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.integration"></a>

```typescript
public readonly integration: DataAwsSsmincidentsResponsePlanIntegrationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList">DataAwsSsmincidentsResponsePlanIntegrationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmincidentsResponsePlanAction <a name="DataAwsSsmincidentsResponsePlanAction" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanAction.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

const dataAwsSsmincidentsResponsePlanAction: dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanAction = { ... }
```


### DataAwsSsmincidentsResponsePlanActionSsmAutomation <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomation" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomation.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

const dataAwsSsmincidentsResponsePlanActionSsmAutomation: dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomation = { ... }
```


### DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

const dataAwsSsmincidentsResponsePlanActionSsmAutomationParameter: dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter = { ... }
```


### DataAwsSsmincidentsResponsePlanConfig <a name="DataAwsSsmincidentsResponsePlanConfig" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

const dataAwsSsmincidentsResponsePlanConfig: dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ssmincidents_response_plan#arn DataAwsSsmincidentsResponsePlan#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ssmincidents_response_plan#id DataAwsSsmincidentsResponsePlan#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ssmincidents_response_plan#tags DataAwsSsmincidentsResponsePlan#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ssmincidents_response_plan#arn DataAwsSsmincidentsResponsePlan#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ssmincidents_response_plan#id DataAwsSsmincidentsResponsePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/ssmincidents_response_plan#tags DataAwsSsmincidentsResponsePlan#tags}.

---

### DataAwsSsmincidentsResponsePlanIncidentTemplate <a name="DataAwsSsmincidentsResponsePlanIncidentTemplate" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

const dataAwsSsmincidentsResponsePlanIncidentTemplate: dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplate = { ... }
```


### DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

const dataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget: dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget = { ... }
```


### DataAwsSsmincidentsResponsePlanIntegration <a name="DataAwsSsmincidentsResponsePlanIntegration" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegration.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

const dataAwsSsmincidentsResponsePlanIntegration: dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegration = { ... }
```


### DataAwsSsmincidentsResponsePlanIntegrationPagerduty <a name="DataAwsSsmincidentsResponsePlanIntegrationPagerduty" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerduty.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

const dataAwsSsmincidentsResponsePlanIntegrationPagerduty: dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerduty = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmincidentsResponsePlanActionList <a name="DataAwsSsmincidentsResponsePlanActionList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.get"></a>

```typescript
public get(index: number): DataAwsSsmincidentsResponsePlanActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanActionOutputReference <a name="DataAwsSsmincidentsResponsePlanActionOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.ssmAutomation">ssmAutomation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList">DataAwsSsmincidentsResponsePlanActionSsmAutomationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanAction">DataAwsSsmincidentsResponsePlanAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ssmAutomation`<sup>Required</sup> <a name="ssmAutomation" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.ssmAutomation"></a>

```typescript
public readonly ssmAutomation: DataAwsSsmincidentsResponsePlanActionSsmAutomationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList">DataAwsSsmincidentsResponsePlanActionSsmAutomationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmincidentsResponsePlanAction;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanAction">DataAwsSsmincidentsResponsePlanAction</a>

---


### DataAwsSsmincidentsResponsePlanActionSsmAutomationList <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.get"></a>

```typescript
public get(index: number): DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion">documentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters">dynamicParameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList">DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount">targetAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomation">DataAwsSsmincidentsResponsePlanActionSsmAutomation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

---

##### `dynamicParameters`<sup>Required</sup> <a name="dynamicParameters" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters"></a>

```typescript
public readonly dynamicParameters: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter"></a>

```typescript
public readonly parameter: DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList">DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `targetAccount`<sup>Required</sup> <a name="targetAccount" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount"></a>

```typescript
public readonly targetAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmincidentsResponsePlanActionSsmAutomation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomation">DataAwsSsmincidentsResponsePlanActionSsmAutomation</a>

---


### DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.get"></a>

```typescript
public get(index: number): DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference <a name="DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter">DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter">DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter</a>

---


### DataAwsSsmincidentsResponsePlanIncidentTemplateList <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.get"></a>

```typescript
public get(index: number): DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get"></a>

```typescript
public get(index: number): DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget">DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget">DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget</a>

---


### DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference <a name="DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">dedupeString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">impact</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">incidentTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget">notificationTarget</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList">DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplate">DataAwsSsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedupeString`<sup>Required</sup> <a name="dedupeString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```typescript
public readonly dedupeString: string;
```

- *Type:* string

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```typescript
public readonly impact: number;
```

- *Type:* number

---

##### `incidentTags`<sup>Required</sup> <a name="incidentTags" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```typescript
public readonly incidentTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `notificationTarget`<sup>Required</sup> <a name="notificationTarget" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList">DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a>

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmincidentsResponsePlanIncidentTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIncidentTemplate">DataAwsSsmincidentsResponsePlanIncidentTemplate</a>

---


### DataAwsSsmincidentsResponsePlanIntegrationList <a name="DataAwsSsmincidentsResponsePlanIntegrationList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.get"></a>

```typescript
public get(index: number): DataAwsSsmincidentsResponsePlanIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanIntegrationOutputReference <a name="DataAwsSsmincidentsResponsePlanIntegrationOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList">DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegration">DataAwsSsmincidentsResponsePlanIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty"></a>

```typescript
public readonly pagerduty: DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList">DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmincidentsResponsePlanIntegration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegration">DataAwsSsmincidentsResponsePlanIntegration</a>

---


### DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList <a name="DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.get"></a>

```typescript
public get(index: number): DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference <a name="DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmincidentsResponsePlan } from '@cdktf/provider-aws'

new dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerduty">DataAwsSsmincidentsResponsePlanIntegrationPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmincidentsResponsePlanIntegrationPagerduty;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmincidentsResponsePlan.DataAwsSsmincidentsResponsePlanIntegrationPagerduty">DataAwsSsmincidentsResponsePlanIntegrationPagerduty</a>

---



