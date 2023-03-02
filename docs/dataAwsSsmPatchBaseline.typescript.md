# `dataAwsSsmPatchBaseline` Submodule <a name="`dataAwsSsmPatchBaseline` Submodule" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmPatchBaseline <a name="DataAwsSsmPatchBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline aws_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline(scope: Construct, id: string, config: DataAwsSsmPatchBaselineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig">DataAwsSsmPatchBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig">DataAwsSsmPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetDefaultBaseline">resetDefaultBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDefaultBaseline` <a name="resetDefaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetDefaultBaseline"></a>

```typescript
public resetDefaultBaseline(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvalRule">approvalRule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList">DataAwsSsmPatchBaselineApprovalRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatches">approvedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.globalFilter">globalFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList">DataAwsSsmPatchBaselineGlobalFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatches">rejectedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList">DataAwsSsmPatchBaselineSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaselineInput">defaultBaselineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaseline">defaultBaseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `approvalRule`<sup>Required</sup> <a name="approvalRule" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvalRule"></a>

```typescript
public readonly approvalRule: DataAwsSsmPatchBaselineApprovalRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList">DataAwsSsmPatchBaselineApprovalRuleList</a>

---

##### `approvedPatches`<sup>Required</sup> <a name="approvedPatches" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatches"></a>

```typescript
public readonly approvedPatches: string[];
```

- *Type:* string[]

---

##### `approvedPatchesComplianceLevel`<sup>Required</sup> <a name="approvedPatchesComplianceLevel" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```typescript
public readonly approvedPatchesComplianceLevel: string;
```

- *Type:* string

---

##### `approvedPatchesEnableNonSecurity`<sup>Required</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```typescript
public readonly approvedPatchesEnableNonSecurity: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalFilter`<sup>Required</sup> <a name="globalFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.globalFilter"></a>

```typescript
public readonly globalFilter: DataAwsSsmPatchBaselineGlobalFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList">DataAwsSsmPatchBaselineGlobalFilterList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rejectedPatches`<sup>Required</sup> <a name="rejectedPatches" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatches"></a>

```typescript
public readonly rejectedPatches: string[];
```

- *Type:* string[]

---

##### `rejectedPatchesAction`<sup>Required</sup> <a name="rejectedPatchesAction" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatchesAction"></a>

```typescript
public readonly rejectedPatchesAction: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.source"></a>

```typescript
public readonly source: DataAwsSsmPatchBaselineSourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList">DataAwsSsmPatchBaselineSourceList</a>

---

##### `defaultBaselineInput`<sup>Optional</sup> <a name="defaultBaselineInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaselineInput"></a>

```typescript
public readonly defaultBaselineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `defaultBaseline`<sup>Required</sup> <a name="defaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaseline"></a>

```typescript
public readonly defaultBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmPatchBaselineApprovalRule <a name="DataAwsSsmPatchBaselineApprovalRule" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

const dataAwsSsmPatchBaselineApprovalRule: dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule = { ... }
```


### DataAwsSsmPatchBaselineApprovalRulePatchFilter <a name="DataAwsSsmPatchBaselineApprovalRulePatchFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

const dataAwsSsmPatchBaselineApprovalRulePatchFilter: dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter = { ... }
```


### DataAwsSsmPatchBaselineConfig <a name="DataAwsSsmPatchBaselineConfig" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

const dataAwsSsmPatchBaselineConfig: dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.defaultBaseline">defaultBaseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}.

---

##### `defaultBaseline`<sup>Optional</sup> <a name="defaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.defaultBaseline"></a>

```typescript
public readonly defaultBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}.

---

### DataAwsSsmPatchBaselineGlobalFilter <a name="DataAwsSsmPatchBaselineGlobalFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

const dataAwsSsmPatchBaselineGlobalFilter: dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter = { ... }
```


### DataAwsSsmPatchBaselineSource <a name="DataAwsSsmPatchBaselineSource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

const dataAwsSsmPatchBaselineSource: dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmPatchBaselineApprovalRuleList <a name="DataAwsSsmPatchBaselineApprovalRuleList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.get"></a>

```typescript
public get(index: number): DataAwsSsmPatchBaselineApprovalRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmPatchBaselineApprovalRuleOutputReference <a name="DataAwsSsmPatchBaselineApprovalRuleOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays">approveAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate">approveUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel">complianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity">enableNonSecurity</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.patchFilter">patchFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList">DataAwsSsmPatchBaselineApprovalRulePatchFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule">DataAwsSsmPatchBaselineApprovalRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approveAfterDays`<sup>Required</sup> <a name="approveAfterDays" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays"></a>

```typescript
public readonly approveAfterDays: number;
```

- *Type:* number

---

##### `approveUntilDate`<sup>Required</sup> <a name="approveUntilDate" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate"></a>

```typescript
public readonly approveUntilDate: string;
```

- *Type:* string

---

##### `complianceLevel`<sup>Required</sup> <a name="complianceLevel" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel"></a>

```typescript
public readonly complianceLevel: string;
```

- *Type:* string

---

##### `enableNonSecurity`<sup>Required</sup> <a name="enableNonSecurity" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity"></a>

```typescript
public readonly enableNonSecurity: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `patchFilter`<sup>Required</sup> <a name="patchFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.patchFilter"></a>

```typescript
public readonly patchFilter: DataAwsSsmPatchBaselineApprovalRulePatchFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList">DataAwsSsmPatchBaselineApprovalRulePatchFilterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmPatchBaselineApprovalRule;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule">DataAwsSsmPatchBaselineApprovalRule</a>

---


### DataAwsSsmPatchBaselineApprovalRulePatchFilterList <a name="DataAwsSsmPatchBaselineApprovalRulePatchFilterList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.get"></a>

```typescript
public get(index: number): DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference <a name="DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter">DataAwsSsmPatchBaselineApprovalRulePatchFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmPatchBaselineApprovalRulePatchFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter">DataAwsSsmPatchBaselineApprovalRulePatchFilter</a>

---


### DataAwsSsmPatchBaselineGlobalFilterList <a name="DataAwsSsmPatchBaselineGlobalFilterList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.get"></a>

```typescript
public get(index: number): DataAwsSsmPatchBaselineGlobalFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmPatchBaselineGlobalFilterOutputReference <a name="DataAwsSsmPatchBaselineGlobalFilterOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter">DataAwsSsmPatchBaselineGlobalFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmPatchBaselineGlobalFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter">DataAwsSsmPatchBaselineGlobalFilter</a>

---


### DataAwsSsmPatchBaselineSourceList <a name="DataAwsSsmPatchBaselineSourceList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.get"></a>

```typescript
public get(index: number): DataAwsSsmPatchBaselineSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmPatchBaselineSourceOutputReference <a name="DataAwsSsmPatchBaselineSourceOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/provider-aws'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.products">products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource">DataAwsSsmPatchBaselineSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmPatchBaselineSource;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource">DataAwsSsmPatchBaselineSource</a>

---



