# `cloudcontrolapiResource` Submodule <a name="`cloudcontrolapiResource` Submodule" id="@cdktf/provider-aws.cloudcontrolapiResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudcontrolapiResource <a name="CloudcontrolapiResource" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource aws_cloudcontrolapi_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer"></a>

```typescript
import { cloudcontrolapiResource } from '@cdktf/provider-aws'

new cloudcontrolapiResource.CloudcontrolapiResource(scope: Construct, id: string, config: CloudcontrolapiResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig">CloudcontrolapiResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig">CloudcontrolapiResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetTypeVersionId">resetTypeVersionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudcontrolapiResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTypeVersionId` <a name="resetTypeVersionId" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetTypeVersionId"></a>

```typescript
public resetTypeVersionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isConstruct"></a>

```typescript
import { cloudcontrolapiResource } from '@cdktf/provider-aws'

cloudcontrolapiResource.CloudcontrolapiResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformElement"></a>

```typescript
import { cloudcontrolapiResource } from '@cdktf/provider-aws'

cloudcontrolapiResource.CloudcontrolapiResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformResource"></a>

```typescript
import { cloudcontrolapiResource } from '@cdktf/provider-aws'

cloudcontrolapiResource.CloudcontrolapiResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.properties">properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference">CloudcontrolapiResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeVersionIdInput">typeVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeVersionId">typeVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.timeouts"></a>

```typescript
public readonly timeouts: CloudcontrolapiResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference">CloudcontrolapiResourceTimeoutsOutputReference</a>

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CloudcontrolapiResourceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a> | cdktf.IResolvable

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `typeVersionIdInput`<sup>Optional</sup> <a name="typeVersionIdInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeVersionIdInput"></a>

```typescript
public readonly typeVersionIdInput: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typeVersionId`<sup>Required</sup> <a name="typeVersionId" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeVersionId"></a>

```typescript
public readonly typeVersionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudcontrolapiResourceConfig <a name="CloudcontrolapiResourceConfig" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.Initializer"></a>

```typescript
import { cloudcontrolapiResource } from '@cdktf/provider-aws'

const cloudcontrolapiResourceConfig: cloudcontrolapiResource.CloudcontrolapiResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#desired_state CloudcontrolapiResource#desired_state}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_name CloudcontrolapiResource#type_name}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#id CloudcontrolapiResource#id}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#role_arn CloudcontrolapiResource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#schema CloudcontrolapiResource#schema}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.typeVersionId">typeVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_version_id CloudcontrolapiResource#type_version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#desired_state CloudcontrolapiResource#desired_state}.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_name CloudcontrolapiResource#type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#id CloudcontrolapiResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#role_arn CloudcontrolapiResource#role_arn}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#schema CloudcontrolapiResource#schema}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudcontrolapiResourceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#timeouts CloudcontrolapiResource#timeouts}

---

##### `typeVersionId`<sup>Optional</sup> <a name="typeVersionId" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.typeVersionId"></a>

```typescript
public readonly typeVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_version_id CloudcontrolapiResource#type_version_id}.

---

### CloudcontrolapiResourceTimeouts <a name="CloudcontrolapiResourceTimeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.Initializer"></a>

```typescript
import { cloudcontrolapiResource } from '@cdktf/provider-aws'

const cloudcontrolapiResourceTimeouts: cloudcontrolapiResource.CloudcontrolapiResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#create CloudcontrolapiResource#create}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#delete CloudcontrolapiResource#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#update CloudcontrolapiResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#create CloudcontrolapiResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#delete CloudcontrolapiResource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#update CloudcontrolapiResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudcontrolapiResourceTimeoutsOutputReference <a name="CloudcontrolapiResourceTimeoutsOutputReference" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudcontrolapiResource } from '@cdktf/provider-aws'

new cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudcontrolapiResourceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a> | cdktf.IResolvable

---



