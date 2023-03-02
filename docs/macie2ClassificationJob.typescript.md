# `macie2ClassificationJob` Submodule <a name="`macie2ClassificationJob` Submodule" id="@cdktf/provider-aws.macie2ClassificationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2ClassificationJob <a name="Macie2ClassificationJob" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job aws_macie2_classification_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJob(scope: Construct, id: string, config: Macie2ClassificationJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig">Macie2ClassificationJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig">Macie2ClassificationJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putS3JobDefinition">putS3JobDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putScheduleFrequency">putScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetCustomDataIdentifierIds">resetCustomDataIdentifierIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetInitialRun">resetInitialRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetJobStatus">resetJobStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetSamplingPercentage">resetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetScheduleFrequency">resetScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putS3JobDefinition` <a name="putS3JobDefinition" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putS3JobDefinition"></a>

```typescript
public putS3JobDefinition(value: Macie2ClassificationJobS3JobDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putS3JobDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

---

##### `putScheduleFrequency` <a name="putScheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putScheduleFrequency"></a>

```typescript
public putScheduleFrequency(value: Macie2ClassificationJobScheduleFrequency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putScheduleFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

---

##### `resetCustomDataIdentifierIds` <a name="resetCustomDataIdentifierIds" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetCustomDataIdentifierIds"></a>

```typescript
public resetCustomDataIdentifierIds(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialRun` <a name="resetInitialRun" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetInitialRun"></a>

```typescript
public resetInitialRun(): void
```

##### `resetJobStatus` <a name="resetJobStatus" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetJobStatus"></a>

```typescript
public resetJobStatus(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetSamplingPercentage` <a name="resetSamplingPercentage" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetSamplingPercentage"></a>

```typescript
public resetSamplingPercentage(): void
```

##### `resetScheduleFrequency` <a name="resetScheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetScheduleFrequency"></a>

```typescript
public resetScheduleFrequency(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isConstruct"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

macie2ClassificationJob.Macie2ClassificationJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobArn">jobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinition">s3JobDefinition</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference">Macie2ClassificationJobS3JobDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequency">scheduleFrequency</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference">Macie2ClassificationJobScheduleFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.userPausedDetails">userPausedDetails</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList">Macie2ClassificationJobUserPausedDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIdsInput">customDataIdentifierIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.initialRunInput">initialRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatusInput">jobStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobTypeInput">jobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinitionInput">s3JobDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequencyInput">scheduleFrequencyInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIds">customDataIdentifierIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.initialRun">initialRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatus">jobStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobType">jobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `jobArn`<sup>Required</sup> <a name="jobArn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobArn"></a>

```typescript
public readonly jobArn: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `s3JobDefinition`<sup>Required</sup> <a name="s3JobDefinition" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinition"></a>

```typescript
public readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference">Macie2ClassificationJobS3JobDefinitionOutputReference</a>

---

##### `scheduleFrequency`<sup>Required</sup> <a name="scheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: Macie2ClassificationJobScheduleFrequencyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference">Macie2ClassificationJobScheduleFrequencyOutputReference</a>

---

##### `userPausedDetails`<sup>Required</sup> <a name="userPausedDetails" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.userPausedDetails"></a>

```typescript
public readonly userPausedDetails: Macie2ClassificationJobUserPausedDetailsList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList">Macie2ClassificationJobUserPausedDetailsList</a>

---

##### `customDataIdentifierIdsInput`<sup>Optional</sup> <a name="customDataIdentifierIdsInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIdsInput"></a>

```typescript
public readonly customDataIdentifierIdsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialRunInput`<sup>Optional</sup> <a name="initialRunInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.initialRunInput"></a>

```typescript
public readonly initialRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobStatusInput`<sup>Optional</sup> <a name="jobStatusInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatusInput"></a>

```typescript
public readonly jobStatusInput: string;
```

- *Type:* string

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobTypeInput"></a>

```typescript
public readonly jobTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `s3JobDefinitionInput`<sup>Optional</sup> <a name="s3JobDefinitionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinitionInput"></a>

```typescript
public readonly s3JobDefinitionInput: Macie2ClassificationJobS3JobDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentageInput"></a>

```typescript
public readonly samplingPercentageInput: number;
```

- *Type:* number

---

##### `scheduleFrequencyInput`<sup>Optional</sup> <a name="scheduleFrequencyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequencyInput"></a>

```typescript
public readonly scheduleFrequencyInput: Macie2ClassificationJobScheduleFrequency;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customDataIdentifierIds`<sup>Required</sup> <a name="customDataIdentifierIds" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIds"></a>

```typescript
public readonly customDataIdentifierIds: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialRun`<sup>Required</sup> <a name="initialRun" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.initialRun"></a>

```typescript
public readonly initialRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobStatus`<sup>Required</sup> <a name="jobStatus" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatus"></a>

```typescript
public readonly jobStatus: string;
```

- *Type:* string

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2ClassificationJobConfig <a name="Macie2ClassificationJobConfig" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobConfig: macie2ClassificationJob.Macie2ClassificationJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobType">jobType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_type Macie2ClassificationJob#job_type}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.s3JobDefinition">s3JobDefinition</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a></code> | s3_job_definition block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.customDataIdentifierIds">customDataIdentifierIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#description Macie2ClassificationJob#description}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#id Macie2ClassificationJob#id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.initialRun">initialRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#initial_run Macie2ClassificationJob#initial_run}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobStatus">jobStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_status Macie2ClassificationJob#job_status}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name Macie2ClassificationJob#name}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name_prefix Macie2ClassificationJob#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#sampling_percentage Macie2ClassificationJob#sampling_percentage}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.scheduleFrequency">scheduleFrequency</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a></code> | schedule_frequency block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags Macie2ClassificationJob#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags_all Macie2ClassificationJob#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_type Macie2ClassificationJob#job_type}.

---

##### `s3JobDefinition`<sup>Required</sup> <a name="s3JobDefinition" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.s3JobDefinition"></a>

```typescript
public readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

s3_job_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#s3_job_definition Macie2ClassificationJob#s3_job_definition}

---

##### `customDataIdentifierIds`<sup>Optional</sup> <a name="customDataIdentifierIds" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.customDataIdentifierIds"></a>

```typescript
public readonly customDataIdentifierIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#description Macie2ClassificationJob#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#id Macie2ClassificationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialRun`<sup>Optional</sup> <a name="initialRun" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.initialRun"></a>

```typescript
public readonly initialRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#initial_run Macie2ClassificationJob#initial_run}.

---

##### `jobStatus`<sup>Optional</sup> <a name="jobStatus" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobStatus"></a>

```typescript
public readonly jobStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_status Macie2ClassificationJob#job_status}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name Macie2ClassificationJob#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name_prefix Macie2ClassificationJob#name_prefix}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#sampling_percentage Macie2ClassificationJob#sampling_percentage}.

---

##### `scheduleFrequency`<sup>Optional</sup> <a name="scheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: Macie2ClassificationJobScheduleFrequency;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

schedule_frequency block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#schedule_frequency Macie2ClassificationJob#schedule_frequency}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags Macie2ClassificationJob#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags_all Macie2ClassificationJob#tags_all}.

---

### Macie2ClassificationJobS3JobDefinition <a name="Macie2ClassificationJobS3JobDefinition" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinition: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketCriteria">bucketCriteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a></code> | bucket_criteria block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketDefinitions">bucketDefinitions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]</code> | bucket_definitions block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.scoping">scoping</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a></code> | scoping block. |

---

##### `bucketCriteria`<sup>Optional</sup> <a name="bucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketCriteria"></a>

```typescript
public readonly bucketCriteria: Macie2ClassificationJobS3JobDefinitionBucketCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a>

bucket_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#bucket_criteria Macie2ClassificationJob#bucket_criteria}

---

##### `bucketDefinitions`<sup>Optional</sup> <a name="bucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketDefinitions"></a>

```typescript
public readonly bucketDefinitions: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]

bucket_definitions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#bucket_definitions Macie2ClassificationJob#bucket_definitions}

---

##### `scoping`<sup>Optional</sup> <a name="scoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.scoping"></a>

```typescript
public readonly scoping: Macie2ClassificationJobS3JobDefinitionScoping;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

scoping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#scoping Macie2ClassificationJob#scoping}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteria <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteria: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a></code> | includes block. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.property.excludes"></a>

```typescript
public readonly excludes: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#excludes Macie2ClassificationJob#excludes}

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.property.includes"></a>

```typescript
public readonly includes: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#includes Macie2ClassificationJob#includes}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes.property.and">and</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd</a>[]</code> | and block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes.property.and"></a>

```typescript
public readonly and: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.property.simpleCriterion">simpleCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a></code> | simple_criterion block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.property.tagCriterion">tagCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a></code> | tag_criterion block. |

---

##### `simpleCriterion`<sup>Optional</sup> <a name="simpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.property.simpleCriterion"></a>

```typescript
public readonly simpleCriterion: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a>

simple_criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_criterion Macie2ClassificationJob#simple_criterion}

---

##### `tagCriterion`<sup>Optional</sup> <a name="tagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.property.tagCriterion"></a>

```typescript
public readonly tagCriterion: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a>

tag_criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_criterion Macie2ClassificationJob#tag_criterion}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.property.tagValues">tagValues</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues</a>[]</code> | tag_values block. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.property.tagValues"></a>

```typescript
public readonly tagValues: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues</a>[]

tag_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes.property.and">and</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd</a>[]</code> | and block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes.property.and"></a>

```typescript
public readonly and: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.property.simpleCriterion">simpleCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a></code> | simple_criterion block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.property.tagCriterion">tagCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a></code> | tag_criterion block. |

---

##### `simpleCriterion`<sup>Optional</sup> <a name="simpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.property.simpleCriterion"></a>

```typescript
public readonly simpleCriterion: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a>

simple_criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_criterion Macie2ClassificationJob#simple_criterion}

---

##### `tagCriterion`<sup>Optional</sup> <a name="tagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.property.tagCriterion"></a>

```typescript
public readonly tagCriterion: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a>

tag_criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_criterion Macie2ClassificationJob#tag_criterion}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.property.tagValues">tagValues</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues</a>[]</code> | tag_values block. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.property.tagValues"></a>

```typescript
public readonly tagValues: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues</a>[]

tag_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobS3JobDefinitionBucketDefinitions <a name="Macie2ClassificationJobS3JobDefinitionBucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionBucketDefinitions: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#account_id Macie2ClassificationJob#account_id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.buckets">buckets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#buckets Macie2ClassificationJob#buckets}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#account_id Macie2ClassificationJob#account_id}.

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.buckets"></a>

```typescript
public readonly buckets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#buckets Macie2ClassificationJob#buckets}.

---

### Macie2ClassificationJobS3JobDefinitionScoping <a name="Macie2ClassificationJobS3JobDefinitionScoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScoping: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a></code> | includes block. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.excludes"></a>

```typescript
public readonly excludes: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#excludes Macie2ClassificationJob#excludes}

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.includes"></a>

```typescript
public readonly includes: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#includes Macie2ClassificationJob#includes}

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludes <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingExcludes: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes.property.and">and</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]</code> | and block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes.property.and"></a>

```typescript
public readonly and: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingExcludesAnd: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.simpleScopeTerm">simpleScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a></code> | simple_scope_term block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.tagScopeTerm">tagScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a></code> | tag_scope_term block. |

---

##### `simpleScopeTerm`<sup>Optional</sup> <a name="simpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.simpleScopeTerm"></a>

```typescript
public readonly simpleScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

simple_scope_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}

---

##### `tagScopeTerm`<sup>Optional</sup> <a name="tagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.tagScopeTerm"></a>

```typescript
public readonly tagScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

tag_scope_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.tagValues">tagValues</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]</code> | tag_values block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.tagValues"></a>

```typescript
public readonly tagValues: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]

tag_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}.

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludes <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingIncludes: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes.property.and">and</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]</code> | and block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes.property.and"></a>

```typescript
public readonly and: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingIncludesAnd: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.simpleScopeTerm">simpleScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a></code> | simple_scope_term block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.tagScopeTerm">tagScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a></code> | tag_scope_term block. |

---

##### `simpleScopeTerm`<sup>Optional</sup> <a name="simpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.simpleScopeTerm"></a>

```typescript
public readonly simpleScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

simple_scope_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}

---

##### `tagScopeTerm`<sup>Optional</sup> <a name="tagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.tagScopeTerm"></a>

```typescript
public readonly tagScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

tag_scope_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.tagValues">tagValues</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]</code> | tag_values block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.tagValues"></a>

```typescript
public readonly tagValues: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]

tag_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}.

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobScheduleFrequency <a name="Macie2ClassificationJobScheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobScheduleFrequency: macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.dailySchedule">dailySchedule</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#daily_schedule Macie2ClassificationJob#daily_schedule}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.monthlySchedule">monthlySchedule</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#monthly_schedule Macie2ClassificationJob#monthly_schedule}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.weeklySchedule">weeklySchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#weekly_schedule Macie2ClassificationJob#weekly_schedule}. |

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#daily_schedule Macie2ClassificationJob#daily_schedule}.

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#monthly_schedule Macie2ClassificationJob#monthly_schedule}.

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#weekly_schedule Macie2ClassificationJob#weekly_schedule}.

---

### Macie2ClassificationJobUserPausedDetails <a name="Macie2ClassificationJobUserPausedDetails" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

const macie2ClassificationJobUserPausedDetails: macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd</a>[]

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putSimpleCriterion">putSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putTagCriterion">putTagCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resetSimpleCriterion">resetSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resetTagCriterion">resetTagCriterion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSimpleCriterion` <a name="putSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putSimpleCriterion"></a>

```typescript
public putSimpleCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putSimpleCriterion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a>

---

##### `putTagCriterion` <a name="putTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putTagCriterion"></a>

```typescript
public putTagCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putTagCriterion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a>

---

##### `resetSimpleCriterion` <a name="resetSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resetSimpleCriterion"></a>

```typescript
public resetSimpleCriterion(): void
```

##### `resetTagCriterion` <a name="resetTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resetTagCriterion"></a>

```typescript
public resetTagCriterion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.simpleCriterion">simpleCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.tagCriterion">tagCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.simpleCriterionInput">simpleCriterionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.tagCriterionInput">tagCriterionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `simpleCriterion`<sup>Required</sup> <a name="simpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.simpleCriterion"></a>

```typescript
public readonly simpleCriterion: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference</a>

---

##### `tagCriterion`<sup>Required</sup> <a name="tagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.tagCriterion"></a>

```typescript
public readonly tagCriterion: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference</a>

---

##### `simpleCriterionInput`<sup>Optional</sup> <a name="simpleCriterionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.simpleCriterionInput"></a>

```typescript
public readonly simpleCriterionInput: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a>

---

##### `tagCriterionInput`<sup>Optional</sup> <a name="tagCriterionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.tagCriterionInput"></a>

```typescript
public readonly tagCriterionInput: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd</a> | cdktf.IResolvable

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparator` <a name="resetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.putTagValues">putTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagValues` <a name="putTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.putTagValues"></a>

```typescript
public putTagValues(value: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.putTagValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues</a>[]

---

##### `resetComparator` <a name="resetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resetTagValues"></a>

```typescript
public resetTagValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.tagValues">tagValues</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList</a>

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues</a>[]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues</a>[]

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues</a> | cdktf.IResolvable

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resetAnd">resetAnd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd</a>[]

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.andInput">andInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.and"></a>

```typescript
public readonly and: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd</a>[]

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putSimpleCriterion">putSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putTagCriterion">putTagCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resetSimpleCriterion">resetSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resetTagCriterion">resetTagCriterion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSimpleCriterion` <a name="putSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putSimpleCriterion"></a>

```typescript
public putSimpleCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putSimpleCriterion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a>

---

##### `putTagCriterion` <a name="putTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putTagCriterion"></a>

```typescript
public putTagCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putTagCriterion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a>

---

##### `resetSimpleCriterion` <a name="resetSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resetSimpleCriterion"></a>

```typescript
public resetSimpleCriterion(): void
```

##### `resetTagCriterion` <a name="resetTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resetTagCriterion"></a>

```typescript
public resetTagCriterion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.simpleCriterion">simpleCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.tagCriterion">tagCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.simpleCriterionInput">simpleCriterionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.tagCriterionInput">tagCriterionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `simpleCriterion`<sup>Required</sup> <a name="simpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.simpleCriterion"></a>

```typescript
public readonly simpleCriterion: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference</a>

---

##### `tagCriterion`<sup>Required</sup> <a name="tagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.tagCriterion"></a>

```typescript
public readonly tagCriterion: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference</a>

---

##### `simpleCriterionInput`<sup>Optional</sup> <a name="simpleCriterionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.simpleCriterionInput"></a>

```typescript
public readonly simpleCriterionInput: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a>

---

##### `tagCriterionInput`<sup>Optional</sup> <a name="tagCriterionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.tagCriterionInput"></a>

```typescript
public readonly tagCriterionInput: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd</a> | cdktf.IResolvable

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparator` <a name="resetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.putTagValues">putTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagValues` <a name="putTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.putTagValues"></a>

```typescript
public putTagValues(value: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.putTagValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues</a>[]

---

##### `resetComparator` <a name="resetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resetTagValues"></a>

```typescript
public resetTagValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.tagValues">tagValues</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList</a>

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues</a>[]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues</a>[]

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues</a> | cdktf.IResolvable

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resetAnd">resetAnd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd</a>[]

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.andInput">andInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.and"></a>

```typescript
public readonly and: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putExcludes">putExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putIncludes">putIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludes` <a name="putExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putExcludes"></a>

```typescript
public putExcludes(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putExcludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a>

---

##### `putIncludes` <a name="putIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putIncludes"></a>

```typescript
public putIncludes(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putIncludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a>

---

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resetIncludes"></a>

```typescript
public resetIncludes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.excludesInput">excludesInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.includesInput">includesInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.excludes"></a>

```typescript
public readonly excludes: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference</a>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.includes"></a>

```typescript
public readonly includes: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference</a>

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.excludesInput"></a>

```typescript
public readonly excludesInput: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a>

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.includesInput"></a>

```typescript
public readonly includesInput: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList <a name="Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]

---


### Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.bucketsInput">bucketsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.buckets">buckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketsInput`<sup>Optional</sup> <a name="bucketsInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.bucketsInput"></a>

```typescript
public readonly bucketsInput: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.buckets"></a>

```typescript
public readonly buckets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionBucketDefinitions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a> | cdktf.IResolvable

---


### Macie2ClassificationJobS3JobDefinitionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketCriteria">putBucketCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketDefinitions">putBucketDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putScoping">putScoping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketCriteria">resetBucketCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketDefinitions">resetBucketDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetScoping">resetScoping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBucketCriteria` <a name="putBucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketCriteria"></a>

```typescript
public putBucketCriteria(value: Macie2ClassificationJobS3JobDefinitionBucketCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a>

---

##### `putBucketDefinitions` <a name="putBucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketDefinitions"></a>

```typescript
public putBucketDefinitions(value: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketDefinitions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]

---

##### `putScoping` <a name="putScoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putScoping"></a>

```typescript
public putScoping(value: Macie2ClassificationJobS3JobDefinitionScoping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putScoping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

---

##### `resetBucketCriteria` <a name="resetBucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketCriteria"></a>

```typescript
public resetBucketCriteria(): void
```

##### `resetBucketDefinitions` <a name="resetBucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketDefinitions"></a>

```typescript
public resetBucketDefinitions(): void
```

##### `resetScoping` <a name="resetScoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetScoping"></a>

```typescript
public resetScoping(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketCriteria">bucketCriteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitions">bucketDefinitions</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList">Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scoping">scoping</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference">Macie2ClassificationJobS3JobDefinitionScopingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketCriteriaInput">bucketCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitionsInput">bucketDefinitionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scopingInput">scopingInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketCriteria`<sup>Required</sup> <a name="bucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketCriteria"></a>

```typescript
public readonly bucketCriteria: Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference</a>

---

##### `bucketDefinitions`<sup>Required</sup> <a name="bucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitions"></a>

```typescript
public readonly bucketDefinitions: Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList">Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList</a>

---

##### `scoping`<sup>Required</sup> <a name="scoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scoping"></a>

```typescript
public readonly scoping: Macie2ClassificationJobS3JobDefinitionScopingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference">Macie2ClassificationJobS3JobDefinitionScopingOutputReference</a>

---

##### `bucketCriteriaInput`<sup>Optional</sup> <a name="bucketCriteriaInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketCriteriaInput"></a>

```typescript
public readonly bucketCriteriaInput: Macie2ClassificationJobS3JobDefinitionBucketCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a>

---

##### `bucketDefinitionsInput`<sup>Optional</sup> <a name="bucketDefinitionsInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitionsInput"></a>

```typescript
public readonly bucketDefinitionsInput: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]

---

##### `scopingInput`<sup>Optional</sup> <a name="scopingInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scopingInput"></a>

```typescript
public readonly scopingInput: Macie2ClassificationJobS3JobDefinitionScoping;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putSimpleScopeTerm">putSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putTagScopeTerm">putTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetSimpleScopeTerm">resetSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetTagScopeTerm">resetTagScopeTerm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSimpleScopeTerm` <a name="putSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putSimpleScopeTerm"></a>

```typescript
public putSimpleScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putSimpleScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

---

##### `putTagScopeTerm` <a name="putTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putTagScopeTerm"></a>

```typescript
public putTagScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putTagScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

---

##### `resetSimpleScopeTerm` <a name="resetSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetSimpleScopeTerm"></a>

```typescript
public resetSimpleScopeTerm(): void
```

##### `resetTagScopeTerm` <a name="resetTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetTagScopeTerm"></a>

```typescript
public resetTagScopeTerm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTerm">simpleScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTerm">tagScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTermInput">simpleScopeTermInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTermInput">tagScopeTermInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `simpleScopeTerm`<sup>Required</sup> <a name="simpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTerm"></a>

```typescript
public readonly simpleScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference</a>

---

##### `tagScopeTerm`<sup>Required</sup> <a name="tagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTerm"></a>

```typescript
public readonly tagScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference</a>

---

##### `simpleScopeTermInput`<sup>Optional</sup> <a name="simpleScopeTermInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTermInput"></a>

```typescript
public readonly simpleScopeTermInput: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

---

##### `tagScopeTermInput`<sup>Optional</sup> <a name="tagScopeTermInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTermInput"></a>

```typescript
public readonly tagScopeTermInput: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a> | cdktf.IResolvable

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparator` <a name="resetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.putTagValues">putTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagValues` <a name="putTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.putTagValues"></a>

```typescript
public putTagValues(value: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.putTagValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]

---

##### `resetComparator` <a name="resetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTagValues"></a>

```typescript
public resetTagValues(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValues">tagValues</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList</a>

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a> | cdktf.IResolvable

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resetAnd">resetAnd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.andInput">andInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.and"></a>

```typescript
public readonly and: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putSimpleScopeTerm">putSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putTagScopeTerm">putTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetSimpleScopeTerm">resetSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetTagScopeTerm">resetTagScopeTerm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSimpleScopeTerm` <a name="putSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putSimpleScopeTerm"></a>

```typescript
public putSimpleScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putSimpleScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

---

##### `putTagScopeTerm` <a name="putTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putTagScopeTerm"></a>

```typescript
public putTagScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putTagScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

---

##### `resetSimpleScopeTerm` <a name="resetSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetSimpleScopeTerm"></a>

```typescript
public resetSimpleScopeTerm(): void
```

##### `resetTagScopeTerm` <a name="resetTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetTagScopeTerm"></a>

```typescript
public resetTagScopeTerm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTerm">simpleScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTerm">tagScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTermInput">simpleScopeTermInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTermInput">tagScopeTermInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `simpleScopeTerm`<sup>Required</sup> <a name="simpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTerm"></a>

```typescript
public readonly simpleScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference</a>

---

##### `tagScopeTerm`<sup>Required</sup> <a name="tagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTerm"></a>

```typescript
public readonly tagScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference</a>

---

##### `simpleScopeTermInput`<sup>Optional</sup> <a name="simpleScopeTermInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTermInput"></a>

```typescript
public readonly simpleScopeTermInput: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

---

##### `tagScopeTermInput`<sup>Optional</sup> <a name="tagScopeTermInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTermInput"></a>

```typescript
public readonly tagScopeTermInput: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a> | cdktf.IResolvable

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparator` <a name="resetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.putTagValues">putTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagValues` <a name="putTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.putTagValues"></a>

```typescript
public putTagValues(value: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.putTagValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]

---

##### `resetComparator` <a name="resetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTagValues"></a>

```typescript
public resetTagValues(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValues">tagValues</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList</a>

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a> | cdktf.IResolvable

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resetAnd">resetAnd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.andInput">andInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.and"></a>

```typescript
public readonly and: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putExcludes">putExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putIncludes">putIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludes` <a name="putExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putExcludes"></a>

```typescript
public putExcludes(value: Macie2ClassificationJobS3JobDefinitionScopingExcludes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putExcludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

---

##### `putIncludes` <a name="putIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putIncludes"></a>

```typescript
public putIncludes(value: Macie2ClassificationJobS3JobDefinitionScopingIncludes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putIncludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

---

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetIncludes"></a>

```typescript
public resetIncludes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludesInput">excludesInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includesInput">includesInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludes"></a>

```typescript
public readonly excludes: Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference</a>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includes"></a>

```typescript
public readonly includes: Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference</a>

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludesInput"></a>

```typescript
public readonly excludesInput: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includesInput"></a>

```typescript
public readonly includesInput: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScoping;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

---


### Macie2ClassificationJobScheduleFrequencyOutputReference <a name="Macie2ClassificationJobScheduleFrequencyOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetMonthlySchedule">resetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetDailySchedule"></a>

```typescript
public resetDailySchedule(): void
```

##### `resetMonthlySchedule` <a name="resetMonthlySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetMonthlySchedule"></a>

```typescript
public resetMonthlySchedule(): void
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetWeeklySchedule"></a>

```typescript
public resetWeeklySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlyScheduleInput">monthlyScheduleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailySchedule">dailySchedule</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlySchedule">monthlySchedule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailyScheduleInput"></a>

```typescript
public readonly dailyScheduleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthlyScheduleInput`<sup>Optional</sup> <a name="monthlyScheduleInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlyScheduleInput"></a>

```typescript
public readonly monthlyScheduleInput: number;
```

- *Type:* number

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklyScheduleInput"></a>

```typescript
public readonly weeklyScheduleInput: string;
```

- *Type:* string

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthlySchedule`<sup>Required</sup> <a name="monthlySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: number;
```

- *Type:* number

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobScheduleFrequency;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

---


### Macie2ClassificationJobUserPausedDetailsList <a name="Macie2ClassificationJobUserPausedDetailsList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobUserPausedDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Macie2ClassificationJobUserPausedDetailsOutputReference <a name="Macie2ClassificationJobUserPausedDetailsOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/provider-aws'

new macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobExpiresAt">jobExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobImminentExpirationHealthEventArn">jobImminentExpirationHealthEventArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobPausedAt">jobPausedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails">Macie2ClassificationJobUserPausedDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobExpiresAt`<sup>Required</sup> <a name="jobExpiresAt" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobExpiresAt"></a>

```typescript
public readonly jobExpiresAt: string;
```

- *Type:* string

---

##### `jobImminentExpirationHealthEventArn`<sup>Required</sup> <a name="jobImminentExpirationHealthEventArn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobImminentExpirationHealthEventArn"></a>

```typescript
public readonly jobImminentExpirationHealthEventArn: string;
```

- *Type:* string

---

##### `jobPausedAt`<sup>Required</sup> <a name="jobPausedAt" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobPausedAt"></a>

```typescript
public readonly jobPausedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobUserPausedDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails">Macie2ClassificationJobUserPausedDetails</a>

---



