# `data_aws_guardduty_finding_ids`

Refer to the Terraform Registory for docs: [`data_aws_guardduty_finding_ids`](https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/guardduty_finding_ids).

# `dataAwsGuarddutyFindingIds` Submodule <a name="`dataAwsGuarddutyFindingIds` Submodule" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGuarddutyFindingIds <a name="DataAwsGuarddutyFindingIds" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/guardduty_finding_ids aws_guardduty_finding_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer"></a>

```typescript
import { dataAwsGuarddutyFindingIds } from '@cdktf/provider-aws'

new dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds(scope: Construct, id: string, config: DataAwsGuarddutyFindingIdsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig">DataAwsGuarddutyFindingIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig">DataAwsGuarddutyFindingIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsGuarddutyFindingIds resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct"></a>

```typescript
import { dataAwsGuarddutyFindingIds } from '@cdktf/provider-aws'

dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement"></a>

```typescript
import { dataAwsGuarddutyFindingIds } from '@cdktf/provider-aws'

dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource"></a>

```typescript
import { dataAwsGuarddutyFindingIds } from '@cdktf/provider-aws'

dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport"></a>

```typescript
import { dataAwsGuarddutyFindingIds } from '@cdktf/provider-aws'

dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsGuarddutyFindingIds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsGuarddutyFindingIds to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsGuarddutyFindingIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/guardduty_finding_ids#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsGuarddutyFindingIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.findingIds">findingIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.hasFindings">hasFindings</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `findingIds`<sup>Required</sup> <a name="findingIds" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.findingIds"></a>

```typescript
public readonly findingIds: string[];
```

- *Type:* string[]

---

##### `hasFindings`<sup>Required</sup> <a name="hasFindings" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.hasFindings"></a>

```typescript
public readonly hasFindings: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGuarddutyFindingIdsConfig <a name="DataAwsGuarddutyFindingIdsConfig" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.Initializer"></a>

```typescript
import { dataAwsGuarddutyFindingIds } from '@cdktf/provider-aws'

const dataAwsGuarddutyFindingIdsConfig: dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/guardduty_finding_ids#detector_id DataAwsGuarddutyFindingIds#detector_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/data-sources/guardduty_finding_ids#detector_id DataAwsGuarddutyFindingIds#detector_id}.

---



