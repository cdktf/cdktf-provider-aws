# `amiLaunchPermission` Submodule <a name="`amiLaunchPermission` Submodule" id="@cdktf/provider-aws.amiLaunchPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmiLaunchPermission <a name="AmiLaunchPermission" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission aws_ami_launch_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer"></a>

```typescript
import { amiLaunchPermission } from '@cdktf/provider-aws'

new amiLaunchPermission.AmiLaunchPermission(scope: Construct, id: string, config: AmiLaunchPermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig">AmiLaunchPermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig">AmiLaunchPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationalUnitArn">resetOrganizationalUnitArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationArn">resetOrganizationArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrganizationalUnitArn` <a name="resetOrganizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationalUnitArn"></a>

```typescript
public resetOrganizationalUnitArn(): void
```

##### `resetOrganizationArn` <a name="resetOrganizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationArn"></a>

```typescript
public resetOrganizationArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct"></a>

```typescript
import { amiLaunchPermission } from '@cdktf/provider-aws'

amiLaunchPermission.AmiLaunchPermission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement"></a>

```typescript
import { amiLaunchPermission } from '@cdktf/provider-aws'

amiLaunchPermission.AmiLaunchPermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource"></a>

```typescript
import { amiLaunchPermission } from '@cdktf/provider-aws'

amiLaunchPermission.AmiLaunchPermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArnInput">organizationalUnitArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArnInput">organizationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArn">organizationalUnitArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArn">organizationArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `organizationalUnitArnInput`<sup>Optional</sup> <a name="organizationalUnitArnInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArnInput"></a>

```typescript
public readonly organizationalUnitArnInput: string;
```

- *Type:* string

---

##### `organizationArnInput`<sup>Optional</sup> <a name="organizationArnInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArnInput"></a>

```typescript
public readonly organizationArnInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `organizationalUnitArn`<sup>Required</sup> <a name="organizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArn"></a>

```typescript
public readonly organizationalUnitArn: string;
```

- *Type:* string

---

##### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArn"></a>

```typescript
public readonly organizationArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmiLaunchPermissionConfig <a name="AmiLaunchPermissionConfig" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.Initializer"></a>

```typescript
import { amiLaunchPermission } from '@cdktf/provider-aws'

const amiLaunchPermissionConfig: amiLaunchPermission.AmiLaunchPermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.group">group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationalUnitArn">organizationalUnitArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationArn">organizationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationalUnitArn`<sup>Optional</sup> <a name="organizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationalUnitArn"></a>

```typescript
public readonly organizationalUnitArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}.

---

##### `organizationArn`<sup>Optional</sup> <a name="organizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationArn"></a>

```typescript
public readonly organizationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}.

---



