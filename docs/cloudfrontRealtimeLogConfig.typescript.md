# `cloudfrontRealtimeLogConfig` Submodule <a name="`cloudfrontRealtimeLogConfig` Submodule" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontRealtimeLogConfig <a name="CloudfrontRealtimeLogConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

new cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig(scope: Construct, id: string, config: CloudfrontRealtimeLogConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig">CloudfrontRealtimeLogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig">CloudfrontRealtimeLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndpoint"></a>

```typescript
public putEndpoint(value: CloudfrontRealtimeLogConfigEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference">CloudfrontRealtimeLogConfigEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput">samplingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpoint"></a>

```typescript
public readonly endpoint: CloudfrontRealtimeLogConfigEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference">CloudfrontRealtimeLogConfigEndpointOutputReference</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpointInput"></a>

```typescript
public readonly endpointInput: CloudfrontRealtimeLogConfigEndpoint;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput"></a>

```typescript
public readonly samplingRateInput: number;
```

- *Type:* number

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontRealtimeLogConfigConfig <a name="CloudfrontRealtimeLogConfigConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

const cloudfrontRealtimeLogConfigConfig: cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields">fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate">samplingRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endpoint"></a>

```typescript
public readonly endpoint: CloudfrontRealtimeLogConfigEndpoint;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#endpoint CloudfrontRealtimeLogConfig#endpoint}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}.

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontRealtimeLogConfigEndpoint <a name="CloudfrontRealtimeLogConfigEndpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

const cloudfrontRealtimeLogConfigEndpoint: cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | kinesis_stream_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.streamType">streamType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}. |

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

kinesis_stream_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}.

---

### CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig <a name="CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

const cloudfrontRealtimeLogConfigEndpointKinesisStreamConfig: cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.streamArn">streamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}.

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference <a name="CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

new cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---


### CloudfrontRealtimeLogConfigEndpointOutputReference <a name="CloudfrontRealtimeLogConfigEndpointOutputReference" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer"></a>

```typescript
import { cloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

new cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.putKinesisStreamConfig">putKinesisStreamConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisStreamConfig` <a name="putKinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.putKinesisStreamConfig"></a>

```typescript
public putKinesisStreamConfig(value: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.putKinesisStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfigInput">kinesisStreamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamTypeInput">streamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType">streamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference</a>

---

##### `kinesisStreamConfigInput`<sup>Optional</sup> <a name="kinesisStreamConfigInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfigInput"></a>

```typescript
public readonly kinesisStreamConfigInput: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---

##### `streamTypeInput`<sup>Optional</sup> <a name="streamTypeInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamTypeInput"></a>

```typescript
public readonly streamTypeInput: string;
```

- *Type:* string

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfrontRealtimeLogConfigEndpoint;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

---



