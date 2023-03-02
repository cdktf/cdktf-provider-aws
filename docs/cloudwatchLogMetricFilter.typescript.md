# `cloudwatchLogMetricFilter` Submodule <a name="`cloudwatchLogMetricFilter` Submodule" id="@cdktf/provider-aws.cloudwatchLogMetricFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogMetricFilter <a name="CloudwatchLogMetricFilter" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter aws_cloudwatch_log_metric_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer"></a>

```typescript
import { cloudwatchLogMetricFilter } from '@cdktf/provider-aws'

new cloudwatchLogMetricFilter.CloudwatchLogMetricFilter(scope: Construct, id: string, config: CloudwatchLogMetricFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig">CloudwatchLogMetricFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig">CloudwatchLogMetricFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation">putMetricTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetricTransformation` <a name="putMetricTransformation" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation"></a>

```typescript
public putMetricTransformation(value: CloudwatchLogMetricFilterMetricTransformation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct"></a>

```typescript
import { cloudwatchLogMetricFilter } from '@cdktf/provider-aws'

cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement"></a>

```typescript
import { cloudwatchLogMetricFilter } from '@cdktf/provider-aws'

cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource"></a>

```typescript
import { cloudwatchLogMetricFilter } from '@cdktf/provider-aws'

cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformation">metricTransformation</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference">CloudwatchLogMetricFilterMetricTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformationInput">metricTransformationInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metricTransformation`<sup>Required</sup> <a name="metricTransformation" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformation"></a>

```typescript
public readonly metricTransformation: CloudwatchLogMetricFilterMetricTransformationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference">CloudwatchLogMetricFilterMetricTransformationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `metricTransformationInput`<sup>Optional</sup> <a name="metricTransformationInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformationInput"></a>

```typescript
public readonly metricTransformationInput: CloudwatchLogMetricFilterMetricTransformation;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogMetricFilterConfig <a name="CloudwatchLogMetricFilterConfig" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.Initializer"></a>

```typescript
import { cloudwatchLogMetricFilter } from '@cdktf/provider-aws'

const cloudwatchLogMetricFilterConfig: cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.metricTransformation">metricTransformation</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | metric_transformation block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}.

---

##### `metricTransformation`<sup>Required</sup> <a name="metricTransformation" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.metricTransformation"></a>

```typescript
public readonly metricTransformation: CloudwatchLogMetricFilterMetricTransformation;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

metric_transformation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#metric_transformation CloudwatchLogMetricFilter#metric_transformation}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudwatchLogMetricFilterMetricTransformation <a name="CloudwatchLogMetricFilterMetricTransformation" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.Initializer"></a>

```typescript
import { cloudwatchLogMetricFilter } from '@cdktf/provider-aws'

const cloudwatchLogMetricFilterMetricTransformation: cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#namespace CloudwatchLogMetricFilter#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#value CloudwatchLogMetricFilter#value}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#default_value CloudwatchLogMetricFilter#default_value}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#dimensions CloudwatchLogMetricFilter#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#unit CloudwatchLogMetricFilter#unit}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#namespace CloudwatchLogMetricFilter#namespace}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#value CloudwatchLogMetricFilter#value}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#default_value CloudwatchLogMetricFilter#default_value}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#dimensions CloudwatchLogMetricFilter#dimensions}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#unit CloudwatchLogMetricFilter#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogMetricFilterMetricTransformationOutputReference <a name="CloudwatchLogMetricFilterMetricTransformationOutputReference" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer"></a>

```typescript
import { cloudwatchLogMetricFilter } from '@cdktf/provider-aws'

new cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchLogMetricFilterMetricTransformation;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

---



