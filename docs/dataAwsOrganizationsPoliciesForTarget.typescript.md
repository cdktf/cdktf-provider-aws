# `dataAwsOrganizationsPoliciesForTarget` Submodule <a name="`dataAwsOrganizationsPoliciesForTarget` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsPoliciesForTarget <a name="DataAwsOrganizationsPoliciesForTarget" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/organizations_policies_for_target aws_organizations_policies_for_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer"></a>

```typescript
import { dataAwsOrganizationsPoliciesForTarget } from '@cdktf/provider-aws'

new dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget(scope: Construct, id: string, config: DataAwsOrganizationsPoliciesForTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig">DataAwsOrganizationsPoliciesForTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig">DataAwsOrganizationsPoliciesForTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOrganizationsPoliciesForTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isConstruct"></a>

```typescript
import { dataAwsOrganizationsPoliciesForTarget } from '@cdktf/provider-aws'

dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformElement"></a>

```typescript
import { dataAwsOrganizationsPoliciesForTarget } from '@cdktf/provider-aws'

dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformDataSource"></a>

```typescript
import { dataAwsOrganizationsPoliciesForTarget } from '@cdktf/provider-aws'

dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport"></a>

```typescript
import { dataAwsOrganizationsPoliciesForTarget } from '@cdktf/provider-aws'

dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsOrganizationsPoliciesForTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOrganizationsPoliciesForTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOrganizationsPoliciesForTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/organizations_policies_for_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOrganizationsPoliciesForTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsPoliciesForTargetConfig <a name="DataAwsOrganizationsPoliciesForTargetConfig" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.Initializer"></a>

```typescript
import { dataAwsOrganizationsPoliciesForTarget } from '@cdktf/provider-aws'

const dataAwsOrganizationsPoliciesForTargetConfig: dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/organizations_policies_for_target#filter DataAwsOrganizationsPoliciesForTarget#filter}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/organizations_policies_for_target#target_id DataAwsOrganizationsPoliciesForTarget#target_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/organizations_policies_for_target#id DataAwsOrganizationsPoliciesForTarget#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/organizations_policies_for_target#filter DataAwsOrganizationsPoliciesForTarget#filter}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/organizations_policies_for_target#target_id DataAwsOrganizationsPoliciesForTarget#target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/organizations_policies_for_target#id DataAwsOrganizationsPoliciesForTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



