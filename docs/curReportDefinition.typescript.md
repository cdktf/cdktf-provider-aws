# `curReportDefinition` Submodule <a name="`curReportDefinition` Submodule" id="@cdktf/provider-aws.curReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurReportDefinition <a name="CurReportDefinition" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition aws_cur_report_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer"></a>

```typescript
import { curReportDefinition } from '@cdktf/provider-aws'

new curReportDefinition.CurReportDefinition(scope: Construct, id: string, config: CurReportDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts">resetAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports">resetRefreshClosedReports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning">resetReportVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix">resetS3Prefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAdditionalArtifacts` <a name="resetAdditionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts"></a>

```typescript
public resetAdditionalArtifacts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRefreshClosedReports` <a name="resetRefreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports"></a>

```typescript
public resetRefreshClosedReports(): void
```

##### `resetReportVersioning` <a name="resetReportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning"></a>

```typescript
public resetReportVersioning(): void
```

##### `resetS3Prefix` <a name="resetS3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix"></a>

```typescript
public resetS3Prefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct"></a>

```typescript
import { curReportDefinition } from '@cdktf/provider-aws'

curReportDefinition.CurReportDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement"></a>

```typescript
import { curReportDefinition } from '@cdktf/provider-aws'

curReportDefinition.CurReportDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource"></a>

```typescript
import { curReportDefinition } from '@cdktf/provider-aws'

curReportDefinition.CurReportDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput">additionalArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput">additionalSchemaElementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput">refreshClosedReportsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput">reportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput">reportVersioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput">s3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput">s3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts">additionalArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements">additionalSchemaElements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports">refreshClosedReports</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName">reportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning">reportVersioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix">s3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region">s3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `additionalArtifactsInput`<sup>Optional</sup> <a name="additionalArtifactsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput"></a>

```typescript
public readonly additionalArtifactsInput: string[];
```

- *Type:* string[]

---

##### `additionalSchemaElementsInput`<sup>Optional</sup> <a name="additionalSchemaElementsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput"></a>

```typescript
public readonly additionalSchemaElementsInput: string[];
```

- *Type:* string[]

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `refreshClosedReportsInput`<sup>Optional</sup> <a name="refreshClosedReportsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput"></a>

```typescript
public readonly refreshClosedReportsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reportNameInput`<sup>Optional</sup> <a name="reportNameInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput"></a>

```typescript
public readonly reportNameInput: string;
```

- *Type:* string

---

##### `reportVersioningInput`<sup>Optional</sup> <a name="reportVersioningInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput"></a>

```typescript
public readonly reportVersioningInput: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3PrefixInput`<sup>Optional</sup> <a name="s3PrefixInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput"></a>

```typescript
public readonly s3PrefixInput: string;
```

- *Type:* string

---

##### `s3RegionInput`<sup>Optional</sup> <a name="s3RegionInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput"></a>

```typescript
public readonly s3RegionInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `additionalArtifacts`<sup>Required</sup> <a name="additionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts"></a>

```typescript
public readonly additionalArtifacts: string[];
```

- *Type:* string[]

---

##### `additionalSchemaElements`<sup>Required</sup> <a name="additionalSchemaElements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements"></a>

```typescript
public readonly additionalSchemaElements: string[];
```

- *Type:* string[]

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `refreshClosedReports`<sup>Required</sup> <a name="refreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports"></a>

```typescript
public readonly refreshClosedReports: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

---

##### `reportVersioning`<sup>Required</sup> <a name="reportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning"></a>

```typescript
public readonly reportVersioning: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix"></a>

```typescript
public readonly s3Prefix: string;
```

- *Type:* string

---

##### `s3Region`<sup>Required</sup> <a name="s3Region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region"></a>

```typescript
public readonly s3Region: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CurReportDefinitionConfig <a name="CurReportDefinitionConfig" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.Initializer"></a>

```typescript
import { curReportDefinition } from '@cdktf/provider-aws'

const curReportDefinitionConfig: curReportDefinition.CurReportDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements">additionalSchemaElements</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression">compression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName">reportName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region">s3Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit">timeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts">additionalArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports">refreshClosedReports</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning">reportVersioning</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix">s3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalSchemaElements`<sup>Required</sup> <a name="additionalSchemaElements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements"></a>

```typescript
public readonly additionalSchemaElements: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}.

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}.

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}.

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}.

---

##### `s3Region`<sup>Required</sup> <a name="s3Region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region"></a>

```typescript
public readonly s3Region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}.

---

##### `additionalArtifacts`<sup>Optional</sup> <a name="additionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts"></a>

```typescript
public readonly additionalArtifacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshClosedReports`<sup>Optional</sup> <a name="refreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports"></a>

```typescript
public readonly refreshClosedReports: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}.

---

##### `reportVersioning`<sup>Optional</sup> <a name="reportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning"></a>

```typescript
public readonly reportVersioning: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}.

---

##### `s3Prefix`<sup>Optional</sup> <a name="s3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix"></a>

```typescript
public readonly s3Prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}.

---



