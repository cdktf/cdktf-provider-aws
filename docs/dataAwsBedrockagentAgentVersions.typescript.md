# `dataAwsBedrockagentAgentVersions` Submodule <a name="`dataAwsBedrockagentAgentVersions` Submodule" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockagentAgentVersions <a name="DataAwsBedrockagentAgentVersions" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions aws_bedrockagent_agent_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

new dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions(scope: Construct, id: string, config: DataAwsBedrockagentAgentVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig">DataAwsBedrockagentAgentVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig">DataAwsBedrockagentAgentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries">putAgentVersionSummaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetAgentVersionSummaries">resetAgentVersionSummaries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAgentVersionSummaries` <a name="putAgentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries"></a>

```typescript
public putAgentVersionSummaries(value: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummaries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]

---

##### `resetAgentVersionSummaries` <a name="resetAgentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetAgentVersionSummaries"></a>

```typescript
public resetAgentVersionSummaries(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockagentAgentVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockagentAgentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockagentAgentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummaries">agentVersionSummaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummariesInput">agentVersionSummariesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `agentVersionSummaries`<sup>Required</sup> <a name="agentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummaries"></a>

```typescript
public readonly agentVersionSummaries: DataAwsBedrockagentAgentVersionsAgentVersionSummariesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesList</a>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `agentVersionSummariesInput`<sup>Optional</sup> <a name="agentVersionSummariesInput" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummariesInput"></a>

```typescript
public readonly agentVersionSummariesInput: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummaries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockagentAgentVersionsAgentVersionSummaries <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.Initializer"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

const dataAwsBedrockagentAgentVersionsAgentVersionSummaries: dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]</code> | guardrail_configuration block. |

---

##### `guardrailConfiguration`<sup>Optional</sup> <a name="guardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.property.guardrailConfiguration"></a>

```typescript
public readonly guardrailConfiguration: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]

guardrail_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#guardrail_configuration DataAwsBedrockagentAgentVersions#guardrail_configuration}

---

### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration.Initializer"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

const dataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration: dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration = { ... }
```


### DataAwsBedrockagentAgentVersionsConfig <a name="DataAwsBedrockagentAgentVersionsConfig" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.Initializer"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

const dataAwsBedrockagentAgentVersionsConfig: dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentId">agentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentVersionSummaries">agentVersionSummaries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]</code> | agent_version_summaries block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}.

---

##### `agentVersionSummaries`<sup>Optional</sup> <a name="agentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentVersionSummaries"></a>

```typescript
public readonly agentVersionSummaries: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummaries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]

agent_version_summaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/bedrockagent_agent_versions#agent_version_summaries DataAwsBedrockagentAgentVersions#agent_version_summaries}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

new dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

new dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailVersion">guardrailVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guardrailIdentifier`<sup>Required</sup> <a name="guardrailIdentifier" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```typescript
public readonly guardrailIdentifier: string;
```

- *Type:* string

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```typescript
public readonly guardrailVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesList <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesList" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

new dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get"></a>

```typescript
public get(index: number): DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummaries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockagentAgentVersions } from '@cdktf/provider-aws'

new dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration">putGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resetGuardrailConfiguration">resetGuardrailConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuardrailConfiguration` <a name="putGuardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration"></a>

```typescript
public putGuardrailConfiguration(value: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]

---

##### `resetGuardrailConfiguration` <a name="resetGuardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resetGuardrailConfiguration"></a>

```typescript
public resetGuardrailConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentName">agentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentStatus">agentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfigurationInput">guardrailConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentName"></a>

```typescript
public readonly agentName: string;
```

- *Type:* string

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `guardrailConfiguration`<sup>Required</sup> <a name="guardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfiguration"></a>

```typescript
public readonly guardrailConfiguration: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `guardrailConfigurationInput`<sup>Optional</sup> <a name="guardrailConfigurationInput" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfigurationInput"></a>

```typescript
public readonly guardrailConfigurationInput: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummaries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>

---



